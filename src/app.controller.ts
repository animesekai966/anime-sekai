import { Controller, Get, Param, Res } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}
  @Get("/")
  home() {
    return "Made With ❤️ By Sekai966 (https://github.com/ig4e)";
  }
}
