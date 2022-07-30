import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import proxy from "express-http-proxy";
import cors from "cors";

import { Request, Response } from "express";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  await app.listen(process.env.PORT || "3000");
}
bootstrap();
