import { Controller, Get, Param, Res } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}
  @Get("/")
  home() {
    return "hi";
  }
}
