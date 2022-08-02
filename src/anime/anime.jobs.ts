import { Injectable } from "@nestjs/common";
import { AnimeManager } from "./anime.manager";
import { AnimeXService } from "src/sources/anime-x/anime-x.service";
import { Cron, CronExpression } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";
import { JikanService } from "src/sources/jikan/jikan.service";

@Injectable()
export class AnimeJobs {
  constructor(
    private manager: AnimeManager,
    private animeXService: AnimeXService,
    private prisma: PrismaService,
    private jikan: JikanService,
  ) {}

  async checkNewAnimeFromAnimeX() {
    for (let page = 0; page < 70; page++) {
      let pageAnimes = await this.animeXService.getAnimeList(page);
      for (let xAnime of pageAnimes) {
        if (xAnime.mal) {
          await this.manager.createAnime({ animeXSlug: xAnime.primary_key });
        } else {
          console.log(`[SCRAPER] skipped non-mal anime ${xAnime.name}`);
        }
      }
    }
  }

  // @Cron(CronExpression.EVERY_HOUR)
  async checkNewEpsFromAnimeX() {
    for (let page = 0; page < 2; page++) {
      let pageAnimes = await this.animeXService.getLatest(page);
      console.log(`[SCRAPER] Scraping Page ${page}`)
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
            console.log("[SCRAPER] Added/Updated new Ep");
          }
        } else {
          console.log(`[SCRAPER] skipped non-mal anime ${xEp.content.name}`);
        }
      }
    }
  }
}
