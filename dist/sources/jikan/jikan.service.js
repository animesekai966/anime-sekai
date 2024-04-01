"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NsfwRatings = exports.malStatusToAnimeSekaiStatus = exports.malRatingsToAnimeSekaiRatings = exports.JikanService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const http = require("http");
const https = require("https");
const jikan4_js_1 = require("jikan4.js");
const jikanHost = `api.jikan.moe`;
let JikanService = class JikanService extends jikan4_js_1.Client {
    constructor() {
        super({
            host: jikanHost,
            keepAlive: true,
            disableCaching: false,
        });
        this.axios = axios_1.default.create({
            baseURL: `https://${jikanHost}/v4/`,
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
    }
    async getAnimeRaw(id) {
        const { data: { data }, } = await this.axios.get(`anime/${id}/full`);
        return data;
    }
    async getPictures(id) {
        const { data: { data }, } = await this.axios.get(`anime/${id}/pictures`);
        return data;
    }
    async getAnimeCharacters(id) {
        const { data: { data }, } = await this.axios.get(`/anime/${id}/characters`);
        return data;
    }
    async getAnimeStaff(id) {
        const { data: { data }, } = await this.axios.get(`/anime/${id}/staff`);
        return data;
    }
    async getAnimePictures(id) {
        const { data: { data }, } = await this.axios.get(`/anime/${id}/pictures`);
        return data;
    }
    async getAnimeRecommendations(id) {
        const { data: { data }, } = await this.axios.get(`/anime/${id}/recommendations`);
        return data;
    }
    async getCharacter(id) {
        const { data: { data }, } = await this.axios.get(`/characters/${id}/full`);
        return data;
    }
    async getAnimeGenres(filter) {
        const { data: { data }, } = await this.axios.get(`/genres/anime${filter ? '?filter=' + filter : ''}`);
        return data;
    }
    async getPerson(id) {
        const { data: { data }, } = await this.axios.get(`/people/${id}/full`);
        return data;
    }
    async getProducer(id) {
        const { data: { data }, } = await this.axios.get(`/producers/${id}/full`);
        return data;
    }
    malIdFromUrl(url) {
        return Number(url.match(/anime\/([0-9]+)\//)[1]);
    }
};
exports.JikanService = JikanService;
exports.JikanService = JikanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JikanService);
exports.malRatingsToAnimeSekaiRatings = {
    'G - All Ages': 'G',
    'PG - Children': 'PG',
    'PG-13 - Teens 13 or older': 'PG13',
    'R - 17+ (violence & profanity)': 'R',
    'R+ - Mild Nudity': 'RP',
    'Rx - Hentai': 'RX',
};
exports.malStatusToAnimeSekaiStatus = {
    'Finished Airing': 'FINISHED',
    'Currently Airing': 'RELEASING',
    'Not yet aired': 'NOT_YET_RELEASED',
};
exports.NsfwRatings = ['R+ - Mild Nudity', 'Rx - Hentai'];
//# sourceMappingURL=jikan.service.js.map