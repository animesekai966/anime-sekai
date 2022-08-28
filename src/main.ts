import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import cors from "cors";

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  app.listen(PORT, () => console.log("Server Started At " + PORT));
}
bootstrap();
