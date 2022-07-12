import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { JikanService } from 'src/jikan.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimeXService {
  constructor(
    private prisma: PrismaService,
    private jikanService: JikanService,
  ) {}
  async getFullAnime(animeObj: { id: string; mal: string }) {
    let [malAnime, xAnime] = await Promise.all([
      this.jikanService.getFullAnime(
        Number(animeObj.mal.match(/anime\/([0-9]+)/)[1]),
      ),
      this.getAnimeInfo(animeObj.id),
    ]);

    await this.prisma.anime.create({
      data: {
        animeXId: xAnime.primary_key,
        malId: malAnime.mal_id,
        title: {
          english: malAnime.title_english,
          romaji: malAnime.title_japanese,
          synonyms: {
            set: malAnime.title_synonyms,
          },
        },
        cover: {
          large: malAnime.images.jpg.large_image_url,
          medium: malAnime.images.jpg.image_url,
          small: malAnime.images.jpg.small_image_url,
        },
        description: {
          ar: xAnime.story,
          en: malAnime.synopsis,
        },
        broadcast: {
          time: malAnime.broadcast.time,
          timezone: malAnime.broadcast.timezone,
          day: malAnime.broadcast.day.toUpperCase() as any,
        },
        duration: malAnime.duration,
        score: {
          mal: {
            score: malAnime.score,
            scoredBy: malAnime.scored_by,
          },
          anilist: {
            score: malAnime.score,
            scoredBy: malAnime.scored_by,
          },
        },
        season: malAnime.season.toUpperCase() as any,
        ageRating: malAnime
      },
    });
  }

  async getAnimeList(page: number = 1): Promise<AnimeListEntity[]> {
    return (await this.fetch({ url: 'v3/anime-list/' + page })).data.data;
  }

  async getLatestReleases(page: number = 1) {
    let offset = page * 20;
    return (await this.fetch({ url: 'v4/episodes/newest-episodes/' + offset }))
      .data.data;
  }

  async getAnimeInfo(animeId: string): Promise<AnimeInfoEntity> {
    return (await this.fetch({ url: 'v3/anime/' + animeId + '/info' })).data
      .data;
  }

  async getAnimeEps(animeId: string): Promise<AnimeEpEntity[]> {
    return (await this.fetch({ url: 'v4/episodes/' + animeId })).data.data;
  }

  async getAnimeEpServers(
    animeId: string,
    epNum: number,
  ): Promise<AnimeEpServerEntity[]> {
    return (
      await this.fetch({ url: 'v4/episodes/' + animeId + '/play/' + epNum })
    ).data.data.wlink;
  }

  async fetch(settings: AxiosRequestConfig) {
    return axios({
      ...settings,
      url: 'https://s2vc.animex.w7orld.com/' + settings.url,
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
}

interface AnimeListEntity {
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
    is_favorite: false;
  };
}

interface AnimeEpEntity {
  number: string;
  last: number;
  filler: number;
}

interface AnimeEpServerEntity {
  link: string;
  server: string;
  fansub: string;
  quality: string;
}

interface AnimeInfoEntity {
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
