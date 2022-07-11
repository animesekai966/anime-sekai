import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { AnimeCreateInput } from 'src/@generated/anime/anime-create.input';
import { Anime } from 'src/@generated/anime/anime.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { JikanService } from './jikan.service';

let animeXquality = {
  '1080p': 'FHD',
  '720p': 'HD',
  '480p': 'SD',
  '360p': 'SD',
};

let malRatings = {
  'G - All Ages': 'G',
  'PG - Children': 'PG',
  'PG-13 - Teens 13 or older': 'PG13',
  'R - 17+ (violence & profanity)': 'R',
  'R+ - Mild Nudity': 'RP',
  'Rx - Hentai': 'RX',
};

let malBroadcastDays = {
  Sundays: 'SUNDAY',
  Saturdays: 'SATURDAY',
  Fridays: 'FRIDAY',
  Mondays: 'MONDAY',
  Thursdays: 'THURSDAY',
  Tuesdays: 'TUESDAY',
  Wednesdays: 'WEDNESDAY',
};

//"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"

@Injectable()
export class AnimeXService {
  constructor(
    private prisma: PrismaService,
    private jikanService: JikanService,
  ) {}
  async fetch(settings: AxiosRequestConfig) {
    return axios({
      ...settings,
      headers: {
        AUTH2:
          'c5ce35bc0ad90ba07d83d155fe10d79278ce75133ea3a1b556be8872ce34f830',
        'User-Agent':
          'AnimeX/1.3.8; Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-N975F Build/N2G48H)',
        'Content-Type': 'application/json',
        Connection: 'Keep-Alive',
      },
    });
  }

  async getAllAnimes(page: number): Promise<AnimeXAnimeListEntry[]> {
    return await this.fetch({
      url: `https://s2vc.animex.w7orld.com/v3/anime-list/${page}`,
    }).then((res) => res.data.data);
  }

  async getEpServers(
    animeXId: string,
    epNumber: string,
  ): Promise<AnimeXAnimeEpsServersEntry[]> {
    return await this.fetch({
      url: `https://s2vc.animex.w7orld.com/v4/episodes/${animeXId}/play/${epNumber}`,
    }).then((res) => res.data.data.wlinks);
  }

  async getAnimeEpsWithServers(animeXId: string): Promise<Anime['episodes']> {
    let allEpsWithServers: Anime['episodes'] = [];
    let allEps: AnimeXAnimeEpsEntry[] = await this.fetch({
      url: `https://s2vc.animex.w7orld.com/v4/episodes/${animeXId}`,
    }).then((res) => res.data.data);

    for (let ep of allEps) {
      let epServers = await this.getEpServers(animeXId, ep.number);
      allEpsWithServers.push({
        id: uuidv4(),
        number: Number(ep.number),
        filler: !ep.filler,
        servers: epServers.map((animeXserver) => {
          return {
            url: animeXserver.link,
            translatedBy: animeXserver.fansub,
            quality: animeXquality[animeXserver.quality],
            dateAdded: new Date(),
          };
        }),
      });
    }

    return allEpsWithServers;
  }

  async getAnimeInfo(animeXId: string): Promise<AnimeXAnimeInfo> {
    return await this.fetch({
      url: `https://s2vc.animex.w7orld.com/v3/anime/${animeXId}/info`,
    }).then((res) => res.data.data);
  }

  async getAnimeFullData(animeXAnime: AnimeXAnimeListEntry) {
    let malId = Number(animeXAnime.mal.match(/anime\/([0-9]+)/)[1]);
    let malAnime = await this.jikanService.getFullAnime(malId);
    let animeXInfo = await this.getAnimeInfo(animeXAnime.slug);

    let anime: Partial<AnimeCreateInput> = {
      animeXId: animeXAnime.slug,
      malId: malId,
      episodes: await this.getAnimeEpsWithServers(animeXAnime.slug),
      ageRating: malRatings[malAnime.rating],
      altCovers: malAnime.altImages.map((altImg) => {
        return {
          large: altImg.jpg.large_image_url,
          medium: malAnime.images.jpg.image_url,
          small: malAnime.images.jpg.image_url,
        };
      }),
      cover: {
        set: {
          large: malAnime.images.jpg.large_image_url,
          medium: malAnime.images.jpg.image_url,
          small: malAnime.images.jpg.image_url,
        },
      },
      broadcast: {
        set: {
          day: malBroadcastDays[malAnime.broadcast.day],
          time: malAnime.broadcast.time,
          timezone: malAnime.broadcast.timezone,
        },
      },
      demographics: {
        connectOrCreate: malAnime.demographics.map((demograpic) => ({
          where: {
            malId: demograpic.mal_id,
          },
          create: {
            malId: demograpic.mal_id,
            name: demograpic.name,
          },
        })),
      },
      description: {
        set: {
          ar: animeXInfo.story,
          en: malAnime.synopsis
        },
      },
      duration: malAnime.duration,
      endDate: {
        set: {
          year: malAnime.aired.prop.to.year,
          month: malAnime.aired.prop.to.month,
          day: malAnime.aired.prop.to.day,

        }
      }
    };

    return anime;
  }

  async fullScrape() {
    let currentPage = 6;
    while (currentPage < 7) {
      let pageAnimes = await this.getAllAnimes(currentPage);
      let animeSekaiAnime = await this.getAnimeFullData(pageAnimes[19]);
      console.log(animeSekaiAnime);
      currentPage++;
    }

    return;
  }
}

interface AnimeXAnimeEpsServersEntry {
  link: string;
  server: string;
  fansub: string;
  embed: boolean;
  quality?: string;
}

interface AnimeXAnimeEpsEntry {
  number: string;
  last: number;
  filler: number;
}

interface AnimeXAnimeListEntry {
  slug: string;
  name: string;
  rate: string;
  age: string;
  state: string;
  mal: string;
  type: string;
  released_at: string;
  posters: string[];
  user: {
    is_favorite: boolean;
  };
}

interface AnimeXAnimeInfo {
  primary_key: string;
  name: string;
  vid_count: string;
  rate: string;
  story: string;
  age: string;
  state: string;
  mal: string;
  type: string;
  released_at: string;
  duration: string;
  season: string;
  posters: string[];
  genres: { name: string }[];
  studios: { name: string }[];
}

/*
        ,*/
