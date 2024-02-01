"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const logger_service_1 = require("./logger/logger.service");
const anime_module_1 = require("./anime/anime.module");
const characters_module_1 = require("./characters/characters.module");
const staff_module_1 = require("./staff/staff.module");
const episodes_module_1 = require("./episodes/episodes.module");
const translate_service_1 = require("./translate/translate.service");
const upload_service_1 = require("./upload/upload.service");
const as_service_1 = require("./sources/as/as.service");
const aw_service_1 = require("./sources/aw/aw.service");
const animeiat_service_1 = require("./sources/animeiat/animeiat.service");
const jikan_service_1 = require("./sources/jikan/jikan.service");
const anilist_service_1 = require("./sources/anilist/anilist.service");
const sa_service_1 = require("./sources/sa/sa.service");
const af_service_1 = require("./sources/af/af.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [anime_module_1.AnimeModule, characters_module_1.CharactersModule, staff_module_1.StaffModule, episodes_module_1.EpisodesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, logger_service_1.Logger, translate_service_1.TranslateService, upload_service_1.UploadService, as_service_1.AsService, aw_service_1.AwService, animeiat_service_1.AnimeiatService, jikan_service_1.JikanService, anilist_service_1.AnilistService, sa_service_1.SaService, af_service_1.AfService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map