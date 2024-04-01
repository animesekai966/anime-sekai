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
exports.AnimeiatService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const axios_retry_1 = require("axios-retry");
const https = require("https");
const http = require("http");
const requests_1 = require("../../constants/requests");
let AnimeiatService = class AnimeiatService {
    constructor() {
        this.client = axios_1.default.create({
            baseURL: 'https://api.animeiat.co/v1',
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
        });
        (0, axios_retry_1.default)(this.client, {
            retries: requests_1.RETRY_LIMIT,
            onRetry(retryCount, error, requestConfig) {
                console.log(`Retrying request ${requestConfig.url} (${retryCount}), error: ${error.message}`);
            },
        });
    }
    async listAnime(options) {
        const { data: animeList } = await this.client.get(`/anime?page=${options.page ?? 1}`);
        return animeList.data;
    }
    async getAnime({ slug = '', ...options }) {
        const { data: animeResponse } = await this.client.get(`/anime/${slug}`);
        const anime = animeResponse.data;
        if (options.include.episodes) {
            const includeServers = typeof options.include.episodes === 'object' &&
                options.include.episodes.servers;
            const skipPagination = typeof options.include.episodes === 'object' &&
                options.include.episodes.skipPagination;
            anime.episodes = await this.getAnimeEps({
                slug: anime.slug,
                include: { servers: includeServers },
                skipPagination: skipPagination,
            });
        }
        return anime;
    }
    async getAnimeEps(options) {
        const { data: animeEpisodesResponse } = await this.client.get(`/anime/${options.slug}/episodes`);
        const firstPageEpisodes = options.include?.servers
            ? await Promise.all(animeEpisodesResponse.data.map(async (ep) => {
                return {
                    ...ep,
                    servers: await this.getAnimeEpServers({
                        episodeSlug: ep.slug,
                    }),
                };
            }))
            : animeEpisodesResponse.data;
        let animeEpisodes = [...firstPageEpisodes];
        if (options.skipPagination) {
            const { last_page, current_page } = animeEpisodesResponse.meta;
            let currentPage = current_page;
            console.log(`Fetching episodes from page ${currentPage} to ${last_page}...`);
            while (currentPage < last_page) {
                currentPage++;
                const { data: animeEpisodesResponse } = await this.client.get(`/anime/${options.slug}/episodes?page=${currentPage}`);
                const epsToAdd = options.include?.servers
                    ? await Promise.all(animeEpisodesResponse.data.map(async (ep) => {
                        return {
                            ...ep,
                            servers: await this.getAnimeEpServers({
                                episodeSlug: ep.slug,
                            }),
                        };
                    }))
                    : animeEpisodesResponse.data;
                animeEpisodes = [...animeEpisodes, ...epsToAdd];
            }
        }
        if (options.include?.servers) {
            return animeEpisodes;
        }
        return animeEpisodes;
    }
    async getAnimeEpServers({ episodeSlug }) {
        const { data: epDataResponse } = await this.client.get(`/episode/${episodeSlug}`);
        const epData = epDataResponse.data;
        const { data: servers } = await this.client.get(`/video/${epData.video.slug}/download`);
        const serversData = servers.data;
        return serversData;
    }
};
exports.AnimeiatService = AnimeiatService;
exports.AnimeiatService = AnimeiatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AnimeiatService);
//# sourceMappingURL=animeiat.service.js.map