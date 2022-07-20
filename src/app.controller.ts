import { Controller, Get, Param, Res } from "@nestjs/common";
import axios from "axios";
import { Response } from "express";
import { AppService } from "./app.service";
import { DiscordService } from "./discord/discord.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private discord: DiscordService,
  ) {}

  @Get("uploads/:id/:name")
  async getImg(
    @Param("id") id: string,
    @Param("name") name: string,
    @Res() res: Response,
  ) {
    let { data, status } = await axios({
      url: `https://media.discordapp.net/attachments/${this.discord.decryptNums(id)}/${name}`,
      responseType: "arraybuffer",
    }).catch(err => err.response);
    if (status != 200) return res.sendStatus(404)
    res.contentType("image/jpeg");
    return res.send(Buffer.from(data, "binary"));
  }
}
