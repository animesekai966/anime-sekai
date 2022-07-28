import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
import { Client } from "jikan4.js";
@Injectable()
export class JikanService extends Client {
  axios: AxiosInstance;
  constructor() {
    super({
      host: "jikan-san.herokuapp.com",
    });
    this.axios = axios.create({
      baseURL: "https://jikan-san.herokuapp.com/v4",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        "x-requested-with": "XMLHttpRequest",
      },
    });
  }

  async get(url: string) {
    return await this.axios.get(url).then((res) => res.data);
  }

  async getAnimeRaw(id: number) {
    return await this.get(`/anime/${id}/full`);
  }

  /*
  async getAnimeCharacters(id: number) {
    return await this.get(`/anime/${id}/characters`);
  }

  async getAnimeStaff(id: number) {
    return await this.get(`/anime/${id}/staff`);
  }

  async getAnimePictures(id: number) {
    return await this.get(`/anime/${id}/pictures`);
  }

  async getAnimeRecommendations(id: number) {
    return await this.get(`/anime/${id}/recommendations`);
  }

  async getCharacter(id: number) {
    return await this.get(`/characters/${id}/full`);
  }

  async getAnimeGenres(
    filter: "genres" | "explicit_genres" | "themes" | "demographics" | null,
  ) {
    return await this.get(`/genres/anime${filter ? "?filter=" + filter : ""}`);
  }

  async getPerson(id: number) {
    return await this.get(`/people/${id}/full`);
  }

  async getProducer(id: number) {
    return await this.get(`/producers/${id}/full`);
  }*/

  malIdFromUrl(url: string) {
    return Number(url.match(/anime\/([0-9]+)\//)[1]);
  }
}

export interface AnimeFullRaw {
  mal_id: 21;
  url: "https://myanimelist.net/anime/21/One_Piece";
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg";
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/73245t.jpg";
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg";
    };
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/6/73245.webp";
      small_image_url: "https://cdn.myanimelist.net/images/anime/6/73245t.webp";
      large_image_url: "https://cdn.myanimelist.net/images/anime/6/73245l.webp";
    };
  };
  trailer: {
    youtube_id: "l_98K4_6UQ0";
    url: "https://www.youtube.com/watch?v=l_98K4_6UQ0";
    embed_url: "https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1";
    images: {
      image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/default.jpg";
      small_image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/sddefault.jpg";
      medium_image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/mqdefault.jpg";
      large_image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/hqdefault.jpg";
      maximum_image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/maxresdefault.jpg";
    };
  };
  approved: true;
  titles: [
    {
      type: "Default";
      title: "One Piece";
    },
    {
      type: "Synonym";
      title: "OP";
    },
    {
      type: "Japanese";
      title: "ONE PIECE";
    },
    {
      type: "English";
      title: "One Piece";
    },
  ];
  title: "One Piece";
  title_english: "One Piece";
  title_japanese: "ONE PIECE";
  title_synonyms: ["OP"];
  type: "TV";
  source: "Manga";
  episodes: null;
  status: "Currently Airing";
  airing: true;
  aired: {
    from: "1999-10-20T00:00:00+00:00";
    to: null;
    prop: {
      from: {
        day: 20;
        month: 10;
        year: 1999;
      };
      to: {
        day: null;
        month: null;
        year: null;
      };
    };
    string: "Oct 20, 1999 to ?";
  };
  duration: "24 min";
  rating: "PG-13 - Teens 13 or older";
  score: 8.66;
  scored_by: 1097534;
  rank: 62;
  popularity: 25;
  members: 1926452;
  favorites: 171945;
  synopsis: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]';
  background: "Several anime-original arcs have been adapted into light novels, and the series has inspired 40+ video games as of 2021.";
  season: "fall";
  year: 1999;
  broadcast: {
    day: "Sundays";
    time: "09:30";
    timezone: "Asia/Tokyo";
    string: "Sundays at 09:30 (JST)";
  };
  producers: [
    {
      mal_id: 169;
      type: "anime";
      name: "Fuji TV";
      url: "https://myanimelist.net/anime/producer/169/Fuji_TV";
    },
    {
      mal_id: 416;
      type: "anime";
      name: "TAP";
      url: "https://myanimelist.net/anime/producer/416/TAP";
    },
    {
      mal_id: 1365;
      type: "anime";
      name: "Shueisha";
      url: "https://myanimelist.net/anime/producer/1365/Shueisha";
    },
  ];
  licensors: [
    {
      mal_id: 102;
      type: "anime";
      name: "Funimation";
      url: "https://myanimelist.net/anime/producer/102/Funimation";
    },
    {
      mal_id: 252;
      type: "anime";
      name: "4Kids Entertainment";
      url: "https://myanimelist.net/anime/producer/252/4Kids_Entertainment";
    },
  ];
  studios: [
    {
      mal_id: 18;
      type: "anime";
      name: "Toei Animation";
      url: "https://myanimelist.net/anime/producer/18/Toei_Animation";
    },
  ];
  genres: [
    {
      mal_id: 1;
      type: "anime";
      name: "Action";
      url: "https://myanimelist.net/anime/genre/1/Action";
    },
    {
      mal_id: 2;
      type: "anime";
      name: "Adventure";
      url: "https://myanimelist.net/anime/genre/2/Adventure";
    },
    {
      mal_id: 10;
      type: "anime";
      name: "Fantasy";
      url: "https://myanimelist.net/anime/genre/10/Fantasy";
    },
  ];
  explicit_genres: [];
  themes: [];
  demographics: [
    {
      mal_id: 27;
      type: "anime";
      name: "Shounen";
      url: "https://myanimelist.net/anime/genre/27/Shounen";
    },
  ];
  relations: [
    {
      relation: "Adaptation";
      entry: [
        {
          mal_id: 13;
          type: "manga";
          name: "One Piece";
          url: "https://myanimelist.net/manga/13/One_Piece";
        },
        {
          mal_id: 94534;
          type: "manga";
          name: "One Piece: Loguetown-hen";
          url: "https://myanimelist.net/manga/94534/One_Piece__Loguetown-hen";
        },
      ];
    },
    {
      relation: "Side story";
      entry: [
        {
          mal_id: 459;
          type: "anime";
          name: "One Piece Movie 01";
          url: "https://myanimelist.net/anime/459/One_Piece_Movie_01";
        },
        {
          mal_id: 460;
          type: "anime";
          name: "One Piece Movie 02: Nejimaki-jima no Daibouken";
          url: "https://myanimelist.net/anime/460/One_Piece_Movie_02__Nejimaki-jima_no_Daibouken";
        },
        {
          mal_id: 461;
          type: "anime";
          name: "One Piece Movie 03: Chinjuu-jima no Chopper Oukoku";
          url: "https://myanimelist.net/anime/461/One_Piece_Movie_03__Chinjuu-jima_no_Chopper_Oukoku";
        },
        {
          mal_id: 462;
          type: "anime";
          name: "One Piece Movie 04: Dead End no Bouken";
          url: "https://myanimelist.net/anime/462/One_Piece_Movie_04__Dead_End_no_Bouken";
        },
        {
          mal_id: 463;
          type: "anime";
          name: "One Piece Movie 05: Norowareta Seiken";
          url: "https://myanimelist.net/anime/463/One_Piece_Movie_05__Norowareta_Seiken";
        },
        {
          mal_id: 464;
          type: "anime";
          name: "One Piece Movie 06: Omatsuri Danshaku to Himitsu no Shima";
          url: "https://myanimelist.net/anime/464/One_Piece_Movie_06__Omatsuri_Danshaku_to_Himitsu_no_Shima";
        },
        {
          mal_id: 465;
          type: "anime";
          name: "One Piece Movie 07: Karakuri-jou no Mecha Kyohei";
          url: "https://myanimelist.net/anime/465/One_Piece_Movie_07__Karakuri-jou_no_Mecha_Kyohei";
        },
        {
          mal_id: 466;
          type: "anime";
          name: "One Piece: Taose! Kaizoku Ganzack";
          url: "https://myanimelist.net/anime/466/One_Piece__Taose_Kaizoku_Ganzack";
        },
        {
          mal_id: 1094;
          type: "anime";
          name: "One Piece: Umi no Heso no Daibouken-hen";
          url: "https://myanimelist.net/anime/1094/One_Piece__Umi_no_Heso_no_Daibouken-hen";
        },
        {
          mal_id: 1237;
          type: "anime";
          name: "One Piece: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!";
          url: "https://myanimelist.net/anime/1237/One_Piece__Oounabara_ni_Hirake_Dekkai_Dekkai_Chichi_no_Yume";
        },
        {
          mal_id: 1238;
          type: "anime";
          name: "One Piece: Mamore! Saigo no Dai Butai";
          url: "https://myanimelist.net/anime/1238/One_Piece__Mamore_Saigo_no_Dai_Butai";
        },
        {
          mal_id: 2020;
          type: "anime";
          name: "One Piece: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou";
          url: "https://myanimelist.net/anime/2020/One_Piece__Nenmatsu_Tokubetsu_Kikaku_Mugiwara_no_Luffy_Oyabun_Torimonochou";
        },
        {
          mal_id: 2385;
          type: "anime";
          name: "One Piece: Jango no Dance Carnival";
          url: "https://myanimelist.net/anime/2385/One_Piece__Jango_no_Dance_Carnival";
        },
        {
          mal_id: 2386;
          type: "anime";
          name: "One Piece: Yume no Soccer Ou!";
          url: "https://myanimelist.net/anime/2386/One_Piece__Yume_no_Soccer_Ou";
        },
        {
          mal_id: 2490;
          type: "anime";
          name: "One Piece: Mezase! Kaizoku Yakyuu Ou";
          url: "https://myanimelist.net/anime/2490/One_Piece__Mezase_Kaizoku_Yakyuu_Ou";
        },
        {
          mal_id: 2680;
          type: "anime";
          name: "One Piece: Straw Hat Theater";
          url: "https://myanimelist.net/anime/2680/One_Piece__Straw_Hat_Theater";
        },
        {
          mal_id: 4155;
          type: "anime";
          name: "One Piece Film: Strong World";
          url: "https://myanimelist.net/anime/4155/One_Piece_Film__Strong_World";
        },
        {
          mal_id: 5252;
          type: "anime";
          name: "One Piece: Romance Dawn Story";
          url: "https://myanimelist.net/anime/5252/One_Piece__Romance_Dawn_Story";
        },
        {
          mal_id: 8740;
          type: "anime";
          name: "One Piece Film: Strong World Episode 0";
          url: "https://myanimelist.net/anime/8740/One_Piece_Film__Strong_World_Episode_0";
        },
        {
          mal_id: 9999;
          type: "anime";
          name: "One Piece 3D: Mugiwara Chase";
          url: "https://myanimelist.net/anime/9999/One_Piece_3D__Mugiwara_Chase";
        },
        {
          mal_id: 12001;
          type: "anime";
          name: "One Piece 3D: Gekisou! Trap Coaster";
          url: "https://myanimelist.net/anime/12001/One_Piece_3D__Gekisou_Trap_Coaster";
        },
        {
          mal_id: 12859;
          type: "anime";
          name: "One Piece Film: Z";
          url: "https://myanimelist.net/anime/12859/One_Piece_Film__Z";
        },
        {
          mal_id: 16239;
          type: "anime";
          name: "One Piece: Episode of Luffy - Hand Island no Bouken";
          url: "https://myanimelist.net/anime/16239/One_Piece__Episode_of_Luffy_-_Hand_Island_no_Bouken";
        },
        {
          mal_id: 16468;
          type: "anime";
          name: "One Piece: Glorious Island";
          url: "https://myanimelist.net/anime/16468/One_Piece__Glorious_Island";
        },
        {
          mal_id: 25161;
          type: "anime";
          name: "One Piece 3D2Y: Ace no shi wo Koete! Luffy Nakama Tono Chikai";
          url: "https://myanimelist.net/anime/25161/One_Piece_3D2Y__Ace_no_shi_wo_Koete_Luffy_Nakama_Tono_Chikai";
        },
        {
          mal_id: 31490;
          type: "anime";
          name: "One Piece Film: Gold";
          url: "https://myanimelist.net/anime/31490/One_Piece_Film__Gold";
        },
        {
          mal_id: 32051;
          type: "anime";
          name: "One Piece: Adventure of Nebulandia";
          url: "https://myanimelist.net/anime/32051/One_Piece__Adventure_of_Nebulandia";
        },
        {
          mal_id: 38234;
          type: "anime";
          name: "One Piece Movie 14: Stampede";
          url: "https://myanimelist.net/anime/38234/One_Piece_Movie_14__Stampede";
        },
        {
          mal_id: 50410;
          type: "anime";
          name: "One Piece Film: Red";
          url: "https://myanimelist.net/anime/50410/One_Piece_Film__Red";
        },
      ];
    },
    {
      relation: "Character";
      entry: [
        {
          mal_id: 813;
          type: "anime";
          name: "Dragon Ball Z";
          url: "https://myanimelist.net/anime/813/Dragon_Ball_Z";
        },
        {
          mal_id: 10033;
          type: "anime";
          name: "Toriko";
          url: "https://myanimelist.net/anime/10033/Toriko";
        },
        {
          mal_id: 23933;
          type: "anime";
          name: "Kyutai Panic Adventure!";
          url: "https://myanimelist.net/anime/23933/Kyutai_Panic_Adventure";
        },
        {
          mal_id: 23935;
          type: "anime";
          name: "Kyutai Panic Adventure Returns!";
          url: "https://myanimelist.net/anime/23935/Kyutai_Panic_Adventure_Returns";
        },
        {
          mal_id: 52139;
          type: "anime";
          name: "Hungry Days x Bump of Chicken: Kinen Satsuei";
          url: "https://myanimelist.net/anime/52139/Hungry_Days_x_Bump_of_Chicken__Kinen_Satsuei";
        },
      ];
    },
    {
      relation: "Summary";
      entry: [
        {
          mal_id: 2107;
          type: "anime";
          name: "One Piece Movie 08: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi";
          url: "https://myanimelist.net/anime/2107/One_Piece_Movie_08__Episode_of_Alabasta_-_Sabaku_no_Oujo_to_Kaizoku-tachi";
        },
        {
          mal_id: 8171;
          type: "anime";
          name: "One Piece Recap";
          url: "https://myanimelist.net/anime/8171/One_Piece_Recap";
        },
        {
          mal_id: 15323;
          type: "anime";
          name: "One Piece: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna";
          url: "https://myanimelist.net/anime/15323/One_Piece__Episode_of_Nami_-_Koukaishi_no_Namida_to_Nakama_no_Kizuna";
        },
        {
          mal_id: 16143;
          type: "anime";
          name: "One Piece: Kinkyuu Kikaku One Piece Kanzen Kouryakuhou";
          url: "https://myanimelist.net/anime/16143/One_Piece__Kinkyuu_Kikaku_One_Piece_Kanzen_Kouryakuhou";
        },
        {
          mal_id: 19123;
          type: "anime";
          name: "One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari";
          url: "https://myanimelist.net/anime/19123/One_Piece__Episode_of_Merry_-_Mou_Hitori_no_Nakama_no_Monogatari";
        },
        {
          mal_id: 28683;
          type: "anime";
          name: "One Piece: Episode of Alabasta - Prologue";
          url: "https://myanimelist.net/anime/28683/One_Piece__Episode_of_Alabasta_-_Prologue";
        },
        {
          mal_id: 31289;
          type: "anime";
          name: "One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi";
          url: "https://myanimelist.net/anime/31289/One_Piece__Episode_of_Sabo_-_3_Kyoudai_no_Kizuna_Kiseki_no_Saikai_to_Uketsugareru_Ishi";
        },
        {
          mal_id: 32437;
          type: "anime";
          name: "One Piece: Long Ring Long Land-hen";
          url: "https://myanimelist.net/anime/32437/One_Piece__Long_Ring_Long_Land-hen";
        },
        {
          mal_id: 36215;
          type: "anime";
          name: "One Piece: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken";
          url: "https://myanimelist.net/anime/36215/One_Piece__Episode_of_East_Blue_-_Luffy_to_4-nin_no_Nakama_no_Daibouken";
        },
        {
          mal_id: 37902;
          type: "anime";
          name: "One Piece: Episode of Sorajima";
          url: "https://myanimelist.net/anime/37902/One_Piece__Episode_of_Sorajima";
        },
        {
          mal_id: 46171;
          type: "anime";
          name: "One Piece: 5-fun de Wakaru Kore made no Wano Kuni-hen";
          url: "https://myanimelist.net/anime/46171/One_Piece__5-fun_de_Wakaru_Kore_made_no_Wano_Kuni-hen";
        },
        {
          mal_id: 50696;
          type: "anime";
          name: "One Piece: Barto no Himitsu no Heya!";
          url: "https://myanimelist.net/anime/50696/One_Piece__Barto_no_Himitsu_no_Heya";
        },
        {
          mal_id: 51162;
          type: "anime";
          name: "One Piece: Otoshidama Special - Tokubetsu Hou Mugiwara Kaizoku-dan no Himitsu!";
          url: "https://myanimelist.net/anime/51162/One_Piece__Otoshidama_Special_-_Tokubetsu_Hou_Mugiwara_Kaizoku-dan_no_Himitsu";
        },
        {
          mal_id: 52199;
          type: "anime";
          name: "One Piece: Dai Tettei Kaibou! Kouzuki Oden Densetsu!";
          url: "https://myanimelist.net/anime/52199/One_Piece__Dai_Tettei_Kaibou_Kouzuki_Oden_Densetsu";
        },
      ];
    },
    {
      relation: "Alternative version";
      entry: [
        {
          mal_id: 3848;
          type: "anime";
          name: "One Piece Movie 09: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura";
          url: "https://myanimelist.net/anime/3848/One_Piece_Movie_09__Episode_of_Chopper_Plus_-_Fuyu_ni_Saku_Kiseki_no_Sakura";
        },
      ];
    },
    {
      relation: "Other";
      entry: [
        
      ];
    },
  ];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
}
