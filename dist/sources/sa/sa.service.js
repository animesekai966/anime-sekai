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
exports.SaService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const https = require("https");
const http = require("http");
let SaService = class SaService {
    constructor() {
        this.client = axios_1.default.create({
            baseURL: 'https://app.sanime.net',
            headers: {
                Origin: 'https://ios.sanime.net',
                'User-Agent': 'IBRAHIMSEVEN',
                'X-Requested-With': 'com.sanimenew.apk',
            },
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
    }
    async listAnime(options) {
        const { data } = await this.client.get(`/secure/animelist.php`);
        const animeList = JSON.parse(this.decode(data));
        if (options.page) {
            return animeList[options.page - 1];
        }
        return animeList;
    }
    async getAnime({ id, include }) {
        const { data } = await this.client.get(`/secure/info.php?id=${id}`);
        const anime = JSON.parse(this.decode(data));
        if (include?.episodes?.servers) {
            anime.ep[0] = await Promise.all(anime.ep[0].map(async (ep) => {
                const servers = await this.getAnimeEpServers({ episodeId: ep.id });
                return { ...ep, servers };
            }));
        }
        return anime;
    }
    async getAnimeEpServers({ episodeId }) {
        const { data } = await this.client.get(`https://app.sanime.net/secure/openAnd.php?id=${btoa(JSON.stringify({ id: episodeId }))}`);
        const epServer = JSON.parse(this.decode(data));
        return epServer;
    }
    decode(string) {
        let n = '';
        for (let t = atob(string), r = 0; r < t.length; r += 2)
            n += String.fromCharCode(parseInt(t.substr(r, 2), 16));
        return n;
    }
};
exports.SaService = SaService;
exports.SaService = SaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SaService);
//# sourceMappingURL=sa.service.js.map