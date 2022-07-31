import { Injectable } from "@nestjs/common";
import { AnimeManager } from "./anime.manager";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { Cron, CronExpression } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";
import { JikanService } from "src/jikan/jikan.service";

@Injectable()
export class AnimeJobs {
  constructor(
    private manager: AnimeManager,
    private blkomService: AnimeBlkomService,
    private animeXService: AnimeXService,
    private prisma: PrismaService,
    private jikan: JikanService,
  ) {}

  async checkNewAnimeFromAnimeX() {
    for (let page = 0; page < 70; page++) {
      let pageAnimes = await this.animeXService.getAnimeList(page);
      for (let xAnime of pageAnimes) {
        if (xAnime.mal) {
          await this.manager.createAnime({ blkomSlug: xAnime.primary_key });
        } else {
          console.log(`[SCRAPER] skipped non-mal anime ${xAnime.name}`);
        }
      }
    }
  }

  async checkNewAnimeFromBlkom() {
    for (let page = 0; page < 200; page++) {
      let pageAnimes = await this.blkomService.getAnimeList(page);
      for (let blkomAnime of pageAnimes) {
        if (blkomAnime.isOnMal) {
          await this.manager.createAnime({ blkomSlug: blkomAnime.slug });
        } else {
          console.log(`[SCRAPER] skipped non-mal anime ${blkomAnime.title}`);
        }
      }
    }
  }

  // @Cron(CronExpression.EVERY_HOUR)
  async checkNewEpsFromAnimeX() {
    for (let page = 0; page < 2; page++) {
      let pageAnimes = await this.animeXService.getLatest(page);
      for (let xEp of pageAnimes) {
        if (xEp.content.mal_url) {
          let ifAnimeExists = await this.prisma.anime.count({
            where: {
              malId: this.jikan.malIdFromUrl(xEp.content.mal_url),
            },
          });
          if (!ifAnimeExists) {
            await this.manager.createAnime({
              animeXSlug: xEp.content.slug,
            });
          } else {
            await this.manager.addAnimeXEp(xEp.content.slug, xEp);
          }
        } else {
          console.log(`[SCRAPER] skipped non-mal anime ${xEp.content.name}`);
        }
      }
    }
  }

  // @Cron(CronExpression.EVERY_HOUR)
  async checkNewEpsFromBlkom() {
    for (let page = 0; page < 2; page++) {
      let pageEps = await this.blkomService.getLatest(page);
      for (let blkomEp of pageEps) {
        let ifAnimeExists = await this.prisma.anime.count({
          where: {
            malId: blkomEp.content.malId,
          },
        });
        if (!ifAnimeExists) {
          await this.manager.createAnime({
            blkomSlug: blkomEp.content_name_url,
          });
        } else {
          await this.manager.addAnimeBlkomEp(
            blkomEp.content_name_url,
            blkomEp.vid_num,
          );
        }
      }
    }
  }
}
