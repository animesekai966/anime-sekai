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
    malId: number;
    anilistId: number;
  }) {
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
  }
}
