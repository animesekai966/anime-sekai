import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as https from 'https';
import * as http from 'http';

interface listOptions {
  page: number;
}

interface getAnimeOptions {
  id?: string;
  include?: {
    episodes?: {
      servers?: boolean;
    };
  };
}

interface getAnimeEpServersOptions {
  episodeId: string;
}

@Injectable()
export class SaService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://app.sanime.net',
      headers: {
        Origin: 'https://ios.sanime.net',
        'User-Agent': 'IBRAHIMSEVEN',
        'X-Requested-With': 'com.sanimenew.apk',
      },
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }

  async listAnime(options: listOptions) {
    const { data } = await this.client.get(`/secure/animelist.php`);
    const animeList = JSON.parse(this.decode(data)) as SaListAnime[][];

    if (options.page) {
      return animeList[options.page - 1];
    }

    return animeList;
  }

  async getAnime({ id, include }: getAnimeOptions) {
    const { data } = await this.client.get(`/secure/info.php?id=${id}`);
    const anime = JSON.parse(this.decode(data)) as SaAnime;

    if (include?.episodes?.servers) {
      anime.ep[0] = await Promise.all(
        anime.ep[0].map(async (ep) => {
          const servers = await this.getAnimeEpServers({ episodeId: ep.id });
          return { ...ep, servers };
        }),
      );
    }

    return anime;
  }

  async getAnimeEpServers({ episodeId }: getAnimeEpServersOptions) {
    const { data } = await this.client.get(
      `https://app.sanime.net/secure/openAnd.php?id=${btoa(JSON.stringify({ id: episodeId }))}`,
    );

    const epServer = JSON.parse(this.decode(data)) as SaEpisodeServer;

    return epServer;
  }

  decode(string: string) {
    let n = '';
    for (let t = atob(string), r = 0; r < t.length; r += 2)
      n += String.fromCharCode(parseInt(t.substr(r, 2), 16));
    return n;
  }
}

export interface SaEpisodeServer {
  id: string;
  hd: string;
  sd: string;
}

export interface SaEpisode {
  id: string;
  name: string;
  epName: number;
  date: string;
  servers: SaEpisodeServer;
}

export interface SaListAnime {
  id: string;
  name: string;
  image: string;
  status: string;
}

export interface SaAnime {
  id: string;
  name: string;
  image: string;
  tag: string;
  animeBackground: string;
  total: number;
  story: string;
  genre: {
    name: string;
  }[];
  youtube: true;
  anime_status: string;
  anime_release: string;
  anime_age: string;
  keywords: string;
  start_date: string;
  score: string;
  type: string;
  ep: [SaEpisode[]];
  youtube_link: string;
  youtube_image: string;
  youtube_id: string;
  cover: string;
  background: string;
  reaction: [[], [], [], [], [], []];
  reactList: [number, number, number, number, number, number];
  userIp: string;
  season: [];
  other: {
    id: string;
    name: string;
    image: string;
    epName: string;
    date: string;
  }[];
}
