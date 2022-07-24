import { Controller, Get, Query } from "@nestjs/common";
import { AnimeSlayerService } from "./anime-slayer.service";

@Controller("anime-slayer")
export class AnimeSlayerController {
    
  constructor(private animeSlayerService: AnimeSlayerService) {}

  @Get("/latest")
  async getLatest(@Query("page") page: number) {
    return await this.animeSlayerService.getLatest(page);
  }
}
