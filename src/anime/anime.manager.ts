import { Injectable } from "@nestjs/common";
import { AnimeCreateInput } from "src/@generated/anime/anime-create.input";
import { AnilistService } from "src/anilist/anilist.service";
import {
  AnimeXService,
  LatestAnimeEntity,
} from "src/sources/anime-x/anime-x.service";
import {
  JikanService,
  malRatingsToAnimeSekaiRatings,
  malStatusToAnimeSekaiStatus,
  NsfwRatings,
} from "src/sources/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UploadService } from "src/upload/upload.service";
import { v4 } from "uuid";
import { TranslateService } from "src/translate/translate.service";
import ms from "ms";

@Injectable()
export class AnimeManager {
  constructor(
    private jikan: JikanService,
    private animeX: AnimeXService,
    private prisma: PrismaService,
    private anilist: AnilistService,
    private upload: UploadService,
    private translator: TranslateService,
  ) {}

  async updateAnime({
    animeXSlug,
    malUrl,
  }: {
    animeXSlug?: string;
    malUrl?: string;
  }) {
    let animeXDetails = await this.animeX.getAnime({
      slug: animeXSlug,
      mal: malUrl,
    });

    let malId = this.jikan.malIdFromUrl(animeXDetails.mal);
    if (!malId) return;
    let currentAnime = await this.prisma.anime.findUnique({
      where: {
        malId,
      },
    });

    let { animeObject, cover, banner, IDs } = await this.getAnimeInfo(
      { malId },
      {
        arDescription: animeXDetails.story,
      },
    );

    if (currentAnime.cover.source !== cover) {
      await this.upload.delete({ key: currentAnime.cover.key });
      let newCover = await this.upload.uploadImgAndConvertFromUrl({
        url: cover,
        type: "animeCover",
        parentId: currentAnime.id,
      });

      await this.prisma.anime.update({
        where: {
          malId,
        },
        data: {
          cover: {
            id: newCover.id,
            key: newCover.Key,
            source: newCover.source,
          },
        },
      });
    } else if (currentAnime.banner.source !== banner) {
      await this.upload.delete({ key: currentAnime.banner.key });
      let newBanner = await this.upload.uploadImgAndConvertFromUrl({
        url: banner,
        type: "animeBanner",
        parentId: currentAnime.id,
      });

      await this.prisma.anime.update({
        where: {
          malId,
        },
        data: {
          banner: {
            id: newBanner.id,
            key: newBanner.Key,
            source: newBanner.source,
          },
        },
      });
    }

    await this.prisma.anime.update({
      where: {
        malId,
      },
      data: {
        duration: animeObject.duration,
        endDate: animeObject.endDate,
        endings: animeObject.endings,
        openings: animeObject.openings,
        episodesCount: animeObject.episodesCount,
        score: animeObject.score,
        broadcast: animeObject.broadcast,
        externalLinks: animeObject.externalLinks,
        rating: animeObject.rating,
        season: animeObject.season,
      },
    });

    await this.addAnimeRelations(currentAnime.malId);
    await this.addAnimeCovers(currentAnime.malId);
    await this.addAnimeStaff(currentAnime.malId);
  }

  async createAnime({
    malUrl,
    animeXSlug,
  }: {
    malUrl?: string;
    animeXSlug?: string;
  }) {
    let animeXDetails = await this.animeX.getAnime({
      slug: animeXSlug,
      mal: malUrl,
    });

    let malId = this.jikan.malIdFromUrl(animeXDetails.mal);
    let animeXId = animeXDetails.primary_key;
    let arStory = animeXDetails.story;

    if (!malId) return null;

    let isAlreadyInDb = await this.prisma.anime.count({
      where: { malId: malId },
    });

    if (isAlreadyInDb) return null;

    let { animeObject, cover, banner, IDs } = await this.getAnimeInfo(
      { malId },
      {
        arDescription: arStory,
      },
    );

    let animeId = v4();

    let animeCover = await this.upload.uploadImgAndConvertFromUrl({
      url: cover,
      parentId: animeId,
      type: "animeCover",
    });

    let animeBanner =
      banner &&
      (await this.upload.uploadImgAndConvertFromUrl({
        url: banner,
        parentId: animeId,
        type: "animeBanner",
      }));

    let anime = await this.prisma.anime.create({
      data: {
        id: animeId,
        malId: IDs.malId,
        anilistId: IDs.anilistId,
        animeXId: animeXId,
        ...animeObject,
        cover: {
          id: animeCover.id,
          key: animeCover.Key,
          source: animeCover.source,
        },
        banner: banner && {
          id: animeBanner.id,
          key: animeBanner.Key,
          source: animeBanner.source,
        },
      },
    });

    console.log(`[CREATED] ${anime.title.romaji}`);
    await this.addAnimeXEpisodes(animeXId, anime.id);
    await this.addAnimeGenres(malId);
    await this.addAnimeStudiosAndProducers(malId);
    await this.addAnimeCovers(malId);
    await this.addAnimeRelations(malId);
    await this.addAnimeCharacters(malId);
    await this.addAnimeStaff(malId);

    return anime;
  }

  async getAnimeInfo(
    { malId }: { malId: number },
    {
      arDescription = undefined,
    }: { arDescription?: string; animeBlkomId?: string; animeXId?: string },
  ) {
    let malDetails = await this.jikan.getAnimeRaw(malId);
    let anilistDetails = await this.anilist.getAnimeDetails({ malId });

    let title: AnimeCreateInput["title"] = {
      set: {
        romaji: malDetails.title || anilistDetails.title.romaji,
        english: malDetails.title_english || anilistDetails.title.english,
        native: malDetails.title_japanese || anilistDetails.title.native,
        synonyms: {
          set: [...malDetails.title_synonyms, ...anilistDetails.synonyms],
        },
      },
    };

    let enDescription = malDetails.synopsis || anilistDetails.description;

    let animeObject = {
      title,
      broadcast: {
        time: malDetails.broadcast.time,
        timezone: malDetails.broadcast.timezone,
        string: malDetails.broadcast.string,
        day: malDetails.broadcast?.day?.toUpperCase() as any,
      },
      description: {
        ar: arDescription || (await this.translator.translate(enDescription)),
        en: enDescription,
      },
      startDate: {
        set: {
          day: anilistDetails.startDate.day ?? malDetails.aired.prop.from.day,
          month:
            anilistDetails.startDate.month ?? malDetails.aired.prop.from.month,
          year:
            anilistDetails.startDate.year ?? malDetails.aired.prop.from.year,
        },
      },
      endDate: {
        set: {
          day: anilistDetails.endDate.day ?? malDetails.aired.prop.to.day,
          month: anilistDetails.endDate.month ?? malDetails.aired.prop.to.month,
          year: anilistDetails.endDate.year ?? malDetails.aired.prop.to.year,
        },
      },
      duration: ms(
        anilistDetails.duration
          ? anilistDetails.duration + "m"
          : malDetails.duration,
      ),
      episodesCount: malDetails.episodes || anilistDetails.episodes,
      rating: malRatingsToAnimeSekaiRatings[malDetails.rating] || undefined,
      season: (malDetails.season?.toUpperCase() ||
        anilistDetails.season ||
        undefined) as any,
      source: (malDetails.source?.toUpperCase()?.replace(/ /g, "_") ||
        anilistDetails.source ||
        undefined) as any,
      isAdult:
        anilistDetails.isAdult ?? NsfwRatings.includes(malDetails.rating),
      isLicensed: anilistDetails.isLicensed ?? malDetails.approved,
      score: {
        set: {
          mal: {
            score: malDetails.score,
            scoredBy: malDetails.scored_by,
          },
          anilist: {
            score: (anilistDetails.averageScore ?? 0) / 10,
            scoredBy: anilistDetails.popularity,
          },
        },
      },
      trailer: {
        set: {
          thumbnail:
            malDetails.trailer?.images?.maximum_image_url ||
            anilistDetails.trailer?.thumbnail,
          url: malDetails.trailer?.url || anilistDetails.trailer?.site,
        },
      },
      format: (malDetails.type?.toUpperCase()?.replace(/ /g, "_") ||
        anilistDetails.format) as any,
      openings: {
        set: malDetails.theme?.openings,
      },
      endings: {
        set: malDetails.theme?.endings,
      },
      status: (anilistDetails.status ||
        malStatusToAnimeSekaiStatus[malDetails.status]) as any,
      countryOfOrigin: anilistDetails.countryOfOrigin,
      externalLinks: {
        set: anilistDetails.externalLinks.map((externalLink) => ({
          url: externalLink.url,
          site: externalLink.site || undefined,
          type: (externalLink.type || "OTHER") as any,
          language: externalLink.language || undefined,
          color: externalLink.color || undefined,
        })),
      },
    };

    let cover =
      anilistDetails.coverImage.extraLarge ||
      anilistDetails.coverImage.large ||
      malDetails.images.jpg.large_image_url ||
      malDetails.images.jpg.image_url;
    let banner = anilistDetails.bannerImage;

    return {
      animeObject,
      cover,
      banner,
      IDs: { malId: malDetails.mal_id, anilistId: anilistDetails.id },
    };
  }

  async addAnimeXEpisodes(slug: string, animeId: string) {
    let animeXeps = await this.animeX.getAnimeEps(slug, true);
    let anime = await this.prisma.anime.findUnique({
      where: {
        id: animeId,
      },
      include: {
        episodes: true,
      },
    });

    let newEps = animeXeps.filter((ep) => {
      return !anime.episodes.find(
        (dbEp) => dbEp.source === "ANIME_X" && dbEp.number === ep.rawNumber,
      );
    });

    if (newEps.length > 0) {
      await this.prisma.anime.update({
        where: {
          id: animeId,
        },
        data: {
          episodes: {
            createMany: {
              data: newEps.map((ep) => {
                return {
                  name: ep.number,
                  number: ep.rawNumber,
                  source: "ANIME_X",
                  filler: ep.filler,
                  last: ep.last,
                  servers: ep.servers.map((server) => ({
                    name: server.server,
                    translatedBy: server.fansub,
                    url: server.link,
                  })),
                };
              }),
            },
          },
        },
      });
    }
    console.log(
      `[UPDATED] ${anime.title.romaji}, added ${newEps.length} new animeX eps`,
    );
  }

  async addAnimeXEp(slug: string, ep: LatestAnimeEntity) {
    let animeXEp = await this.animeX.getAnimeEpServers(slug, ep.number);
    let anime = await this.prisma.anime.findUnique({
      where: {
        malId: this.jikan.malIdFromUrl(ep.content.mal_url),
      },
      include: {
        episodes: true,
      },
    });

    let ifAlreadyExsits = anime.episodes.find(
      (dbEp) => dbEp.source === "ANIME_X" && dbEp.number === ep.rawNumber,
    );

    if (ifAlreadyExsits)
      return console.log(`[SCRAPE] Skipped ${ep.number}ep Already In Db`);

    await this.prisma.anime.update({
      where: {
        malId: this.jikan.malIdFromUrl(ep.content.mal_url),
      },
      data: {
        episodes: {
          create: {
            name: ep.number,
            number: ep.rawNumber,
            source: "ANIME_X",
            filler: ep.filler,
            last: ep.last,
            servers: animeXEp.map((server) => ({
              name: server.server,
              translatedBy: server.fansub,
              url: server.link,
            })),
          },
        },
      },
    });

    console.log(
      `[UPDATED] ${anime.title.romaji}, added ${ep.number} new animeX eps`,
    );
  }

  async addAnimeGenres(malId: number) {
    let malDetails = await this.jikan.anime.getFull(malId);
    if (malDetails.genres.length > 0) {
      let allGenres = [
        ...malDetails.genres,
        ...malDetails.demographics,
        ...malDetails.explicitGenres,
        ...malDetails.themes,
      ];
      let anime = await this.prisma.anime.update({
        where: {
          malId,
        },
        data: {
          genres: {
            connectOrCreate: allGenres.map((genre) => ({
              where: {
                malId: genre.id,
              },
              create: {
                malId: genre.id,
                name: genre.name,
                type: MalGenreTypeToAnimeSekaiType[genre.type],
              },
            })),
          },
        },
      });

      console.log(
        `[UPDATED] ${anime.title.romaji}, added ${allGenres.length} new genres`,
      );
    }
  }

  async addAnimeStudiosAndProducers(malId: number) {
    let malDetails = await this.jikan.anime.getFull(malId);
    if ((malDetails.producers.length || malDetails.studios.length) > 0) {
      let anime = await this.prisma.anime.update({
        where: {
          malId,
        },
        data: {
          producers: {
            connectOrCreate: malDetails.producers.map((producer) => ({
              where: {
                malId: producer.id,
              },
              create: {
                malId: producer.id,
                name: producer.name,
              },
            })),
          },
          studios: {
            connectOrCreate: malDetails.studios.map((studio) => ({
              where: {
                malId: studio.id,
              },
              create: {
                malId: studio.id,
                name: studio.name,
              },
            })),
          },
        },
      });
      console.log(
        `[UPDATED] ${anime.title.romaji}, added producers and studios`,
      );
    }
  }

  async addAnimeCovers(malId: number) {
    let altCovers = await this.jikan.getPictures(malId);
    let anime = await this.prisma.anime.findUnique({
      where: {
        malId,
      },
    });
    let altCoversFormatted: string[] = altCovers.map(
      (c) => (c.jpg.large_image_url || c.jpg.image_url) as any,
    );

    let newCovers = altCoversFormatted.filter(
      (cover) => !anime.altCovers.find((dbCover) => dbCover.source === cover),
    );

    if (newCovers.length > 0) {
      let uploadedCovers = await Promise.all(
        newCovers.map(async (cover) => {
          let upload = await this.upload.uploadImgAndConvertFromUrl({
            url: cover,
            parentId: anime.id,
            type: "animeCover",
          });
          return {
            id: upload.id,
            key: upload.Key,
            source: upload.source,
          };
        }),
      );

      await this.prisma.anime.update({
        where: {
          id: anime.id,
        },
        data: {
          altCovers: uploadedCovers,
        },
      });

      console.log(
        `[UPDATED] ${anime.title.romaji}, added ${newCovers.length} new covers`,
      );
    }
  }

  async addAnimeStaff(malId: number) {
    let animeStaff = await this.jikan.anime.getStaff(malId);
    if (animeStaff.length > 0) {
      for (let staff of animeStaff) {
        await this.createAnimeStaff(staff.person.id);
      }
      await this.prisma.anime.update({
        where: {
          malId,
        },
        data: {
          staff: {
            connectOrCreate: animeStaff.map((staff) => ({
              where: {
                relationId: `${malId}/${staff.person.id}`,
              },
              create: {
                relationId: `${malId}/${staff.person.id}`,
                role: staff.positions.join(","),
                staff: {
                  connect: {
                    malId: staff.person.id,
                  },
                },
              },
            })),
          },
        },
      });
      console.log(`[UPDATED] added staff`);
    }
  }

  async addAnimeCharacters(malId: number) {
    let characters = await this.jikan.anime.getCharacters(malId);
    for (let character of characters) {
      let jaStaff = character.voiceActors.filter(
        (voiceActor) => voiceActor.language === "Japanese",
      );
      await this.createAnimeCharacter(character.character.id);
      for (let epStaff of jaStaff) {
        await this.createAnimeStaff(epStaff.person.id);
      }
    }

    await this.prisma.anime.update({
      where: {
        malId,
      },
      data: {
        characters: {
          connectOrCreate: characters.map((character) => ({
            where: {
              relationId: `${malId}/${character.character.id}`,
            },
            create: {
              relationId: `${malId}/${character.character.id}`,
              role: MalCharacterRoleToAnimeSekaiTypes[character.role],
              character: {
                connect: {
                  malId: character.character.id,
                },
              },
              voiceActors: {
                connect: character.voiceActors
                  .filter((voiceActor) => voiceActor.language === "Japanese")
                  .map((voiceActor) => ({
                    malId: voiceActor.person.id,
                  })),
              },
            },
          })),
        },
      },
    });

    console.log(`[UPDATED] added characters`);
  }

  async createAnimeStaff(malId: number) {
    try {
      let ifAlreadyExsits = await this.prisma.staff.count({
        where: {
          malId,
        },
      });

      if (!ifAlreadyExsits) {
        let staff = await this.jikan.getPerson(malId);
        let staffId = v4();
        let description = {
          en: staff.about,
          ar: await this.translator.translate(staff.about),
        };

        let image = String(staff.images.jpg.image_url);
        let uploadedImage = await this.upload.uploadImgAndConvertFromUrl({
          parentId: staffId,
          url: image,
          type: "staff",
        });

        await this.prisma.staff.create({
          data: {
            id: staffId,
            malId: staff.mal_id,
            image: {
              id: uploadedImage.id,
              source: uploadedImage.source,
              key: uploadedImage.Key,
            },
            description,
            name: {
              english: String(staff.name),
              arabic: String(await this.translator.translate(staff.name, true)),
              native: String(staff.family_name + staff.given_name),
              nativeFamily: String(staff.family_name),
              alternates: staff.alternate_names,
            },
            info: staff.about,
          },
        });
      }
    } catch (err) {
      console.log(
        err,
        "https://jikan-san.herokuapp.com/v4/people/" + malId + "/full",
      );
      return await this.createAnimeStaff(malId);
    }
  }

  async createAnimeCharacter(malId: number) {
    try {
      let ifAlreadyExsits = await this.prisma.character.count({
        where: {
          malId,
        },
      });

      if (!ifAlreadyExsits) {
        let character = await this.jikan.getCharacter(malId);
        let characterId = v4();
        let description = {
          en: character.about,
          ar: await this.translator.translate(character.about),
        };

        let image = String(character.images.jpg.image_url);
        let uploadedImage = await this.upload.uploadImgAndConvertFromUrl({
          parentId: characterId,
          url: image,
          type: "character",
        });

        await this.prisma.character.create({
          data: {
            id: characterId,
            malId: character.mal_id,
            image: {
              source: uploadedImage.source,
              key: uploadedImage.Key,
              id: uploadedImage.id,
            },
            description,
            name: {
              english: String(character.name),
              arabic: String(
                await this.translator.translate(character.name, true),
              ),
              native: String(character.name_kanji),
              alternates: character.nicknames,
            },
          },
        });
      }
    } catch (err) {
      console.log(
        err,
        "https://jikan-san.herokuapp.com/v4/characters/" + malId + "/full",
      );
      return await this.createAnimeCharacter(malId);
    }
  }

  async addAnimeRelations(malId: number) {
    let recommendations = await this.jikan.anime.getRecommendations(malId);
    let relations = await this.jikan.anime.getRelations(malId);
    let relatedAnimes = [];

    relations.map((relation) => {
      relation.items.map((item) => {
        relatedAnimes.push({
          malId: item.id,
          type: MalRelationTypesToAnimeSekaiTypes[relation.relation],
        });
      });
    });

    recommendations.map((recommendation) => {
      relatedAnimes.push({
        malId: recommendation.entry.id,
        type: "RECOMMENDATION",
      });
    });

    let anime = await this.prisma.anime.update({
      where: {
        malId,
      },
      data: {
        related: relatedAnimes,
      },
    });

    console.log(`[UPDATED] ${anime.title.romaji}, updated relations`);
  }
}

export const MalGenreTypeToAnimeSekaiType = {
  Genre: "GENRE",
  Explicit: "EXPLICIT_GENRE",
  Theme: "THEME",
  Demographic: "DEMOGRAPHIC",
};

export const MalRelationTypesToAnimeSekaiTypes = {
  Adaptation: "ADAPTATION",
  SideStory: "SIDE_STORY",
  Summary: "SUMMARY",
  Sequel: "SEQUEL",
  Prequel: "PREQUEL",
  Character: "CHARACTER",
  Other: "OTHER",
  AlternativeVersion: "ALTERNATIVE",
  AlternativeSetting: "ALTERNATIVE",
  SpinOff: "SPIN_OFF",
  ParentStory: "PARENT",
  FullStory: "PARENT",
  Unknown: "OTHER",
};

export const MalCharacterRoleToAnimeSekaiTypes = {
  Main: "MAIN",
  Supporting: "SUPPORTING",
  Background: "BACKGROUND",
};
