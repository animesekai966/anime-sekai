import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Logger as LoggerService } from './logger/logger.service';
import { AnimeModule } from './anime/anime.module';
import { CharactersModule } from './characters/characters.module';
import { StaffModule } from './staff/staff.module';
import { EpisodesModule } from './episodes/episodes.module';
import { TranslateService } from './translate/translate.service';
import { UploadService } from './upload/upload.service';
import { AsService } from './sources/as/as.service';
import { AwService } from './sources/aw/aw.service';
import { AnimeiatService } from './sources/animeiat/animeiat.service';
import { JikanService } from './sources/jikan/jikan.service';
import { AnilistService } from './sources/anilist/anilist.service';

@Module({
  imports: [AnimeModule, CharactersModule, StaffModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService, LoggerService, TranslateService, UploadService, AsService, AwService, AnimeiatService, JikanService, AnilistService],
})
export class AppModule {}
