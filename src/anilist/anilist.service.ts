import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import * as https from "https";
import * as http from "http";

let malStatusToAnilist = {
  "Currently Airing": "RELEASING",
  "Finished Airing": "FINISHED",
  "Not yet aired": "NOT_YET_RELEASED",
};

@Injectable()
export class AnilistService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      method: "post",
      baseURL: "https://graphql.anilist.co/",
    });
  }

  async getAnimeDetails({
    malId,
    anilistId,
  }: {
    malId?: number;
    anilistId?: number;
  }): Promise<AnimeEntity> {
    try {
      let variables: { mediaId?: number; idMal?: number } = {};
      anilistId ? (variables.mediaId = anilistId) : (variables.idMal = malId);

      let {
        data: {
          data: { Media: data },
        },
      } = await this.axios({
        data: {
          query: `query Query($mediaId: Int, $idMal: Int) {
          Media(id: $mediaId, idMal: $idMal) {
            id
            idMal
            title {
              romaji
              english
              native
            }
            type
            format
            status
            description
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            season
            seasonYear
            episodes
            duration
            countryOfOrigin
            isLicensed
            source
            hashtag
            trailer {
              id
              site
              thumbnail
            }
            updatedAt
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            genres
            synonyms
            averageScore
            meanScore
            popularity
            isLocked
            trending
            favourites
            tags {
              id
              name
              description
              category
              isAdult
              isMediaSpoiler
            }
            relations {
              edges {
                id
                relationType
                node {
                  id
                  idMal
                }
              }
            }
            characters {
              edges {
                node {
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                    alternative
                    alternativeSpoiler
                  }
                  image {
                    large
                    medium
                  }
                  description
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  age
                  bloodType
                }
                id
                role
                voiceActorRoles {
                  voiceActor {
                    id
                    name {
                      first
                      middle
                      last
                      full
                      native
                      alternative
                    }
                    languageV2
                    image {
                      large
                      medium
                    }
                    description
                    primaryOccupations
                    gender
                    dateOfBirth {
                      year
                      month
                      day
                    }
                    dateOfDeath {
                      year
                      month
                      day
                    }
                    age
                    yearsActive
                    homeTown
                    bloodType
                  }
                }
              }
            }
            staff {
              edges {
                id
                node {
                  id
                  name {
                    first
                    middle
                    last
                    full
                    native
                  }
                  languageV2
                  image {
                    large
                    medium
                  }
                  description
                  primaryOccupations
                  gender
                  dateOfBirth {
                    year
                    month
                    day
                  }
                  dateOfDeath {
                    year
                    month
                    day
                  }
                  age
                  yearsActive
                  homeTown
                  bloodType
                }
                role
              }
            }
            studios {
              edges {
                node {
                  id
                  name
                  isAnimationStudio
                }
                id
              }
            }
            isAdult
            nextAiringEpisode {
              id
              airingAt
              timeUntilAiring
              episode
            }
            airingSchedule {
              edges {
                id
                node {
                  id
                  airingAt
                  timeUntilAiring
                  episode
                  mediaId
                }
              }
            }
            externalLinks {
              id
              url
              site
              siteId
              type
              language
              color
              icon
            }
            recommendations {
              edges {
                node {
                  id
                  rating
                  userRating
                  media {
                    id
                    idMal
                  }
                }
              }
            }
          }
        }
        `,
          variables,
        },
      });

      //console.log(Media);

      return data;
    } catch (err) {
      return await this.getAnimeDetails({ malId, anilistId });
    }
  }
}

interface AnimeEntity {
  id: number;
  idMal: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  type: string;
  format: string;
  status: string;
  description: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  season: string;
  seasonYear: number;
  episodes: number;
  duration: number;
  countryOfOrigin: string;
  isLicensed: boolean;
  source: string;
  hashtag: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  updatedAt: number;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  bannerImage: string;
  genres: string[];
  synonyms: string[];
  averageScore: number;
  meanScore: number;
  popularity: number;
  isLocked: false;
  trending: number;
  favourites: number;
  tags: {
    id: number;
    name: string;
    description: string;
    category: string;
    isAdult: boolean;
    isMediaSpoiler: boolean;
  }[];
  isAdult: boolean;
  externalLinks: {
    id: number;
    url: string;
    site: string;
    siteId: number;
    type: string;
    language: string;
    color: string;
    icon: string;
  }[];
  relations: {
    edges: {
      id: number;
      relationType: string;
      node: {
        id: number;
        idMal: number;
      };
    }[];
  };
  characters: {
    edges: {
      node: {
        id: number;
        name: {
          first: string;
          middle: string;
          last: string;
          full: string;
          native: string;
          alternative: string[];
          alternativeSpoiler: string[];
        };
        image: {
          large: string;
          medium: string;
        };
        description: string;
        gender: string;
        dateOfBirth: {
          year: number;
          month: number;
          day: number;
        };
        age: string;
        bloodType: string;
      };
      id: number;
      role: string;
      voiceActorRoles: {
        voiceActor: {
          id: number;
          name: {
            first: string;
            middle: string;
            last: string;
            full: string;
            native: string;
            alternative: string[];
          };
          languageV2: string;
          image: {
            large: string;
            medium: string;
          };
          description: string;
          primaryOccupations: string[];
          gender: string;
          dateOfBirth: {
            year: number;
            month: number;
            day: number;
          };
          dateOfDeath: {
            year: number;
            month: number;
            day: number;
          };
          age: number;
          yearsActive: any[];
          homeTown: string;
          bloodType: string;
        };
      }[];
    }[];

    staff: {
      edges: {
        id: number;
        node: {
          id: number;
          name: {
            first: string;
            middle: string;
            last: string;
            full: string;
            native: string;
          };
          languageV2: string;
          image: {
            large: string;
            medium: string;
          };
          description: string;
          primaryOccupations: string[];
          gender: number;
          dateOfBirth: {
            year: number;
            month: number;
            day: number;
          };
          dateOfDeath: {
            year: number;
            month: number;
            day: number;
          };
          age: number;
          yearsActive: number[];
          homeTown: string;
          bloodType: string;
        };
        role: string;
      }[];
    };

    studios: {
      edges: {
        node: {
          id: number;
          name: string;
          isAnimationStudio: boolean;
        };
        id: number;
      }[];
    };

    recommendations: {
      edges: {
        node: {
          id: number;
          rating: number;
          userRating: string;
          media: {
            id: number;
            idMal: number;
          };
        };
      }[];
    };
  };
}
