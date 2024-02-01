"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwService = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const app = (0, app_1.initializeApp)({
    storageBucket: 'animewitcher-1c66d.appspot.com',
    projectId: 'animewitcher-1c66d',
}, 'animewitcher');
const db = (0, firestore_1.getFirestore)(app);
let AwService = class AwService {
    async listAnime(options) {
        const animeList = (0, firestore_1.query)((0, firestore_1.collection)(db, 'anime_list'), (0, firestore_1.limit)(options.limit));
        const animeListSnapshot = await (0, firestore_1.getDocs)(animeList);
        return this.docsData(animeListSnapshot);
    }
    async getAnime({ malId = '', name = '', ...options }) {
        const animeQuery = (0, firestore_1.query)((0, firestore_1.collection)(db, 'anime_list'), (0, firestore_1.or)((0, firestore_1.where)('mal_id', '==', malId), (0, firestore_1.where)('name', '==', name)));
        const animeListSnapshot = await (0, firestore_1.getDocs)(animeQuery);
        const anime = this.docsData(animeListSnapshot)[0];
        if (options.include.episodes) {
            const includeServers = typeof options.include.episodes === 'object' &&
                options.include.episodes.servers;
            anime.episodes = await this.getAnimeEps({
                name: anime.name,
                include: { servers: includeServers },
            });
        }
        return anime;
    }
    async getAnimeEps(options) {
        const animeEpisodes = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'anime_list', options.name, 'episodes'));
        if (options.include?.servers) {
            const animeEpsWithServers = animeEpisodes.docs.map(async (doc) => {
                return {
                    ...doc.data(),
                    servers: await this.getAnimeEpServers({
                        name: options.name,
                        episodeId: doc.id,
                    }),
                };
            });
            return Promise.all(animeEpsWithServers);
        }
        return this.docsData(animeEpisodes);
    }
    async getAnimeEpServers({ episodeId, name }) {
        const servers = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'anime_list', name, 'episodes', episodeId, 'servers'));
        return this.docsData(servers);
    }
    docsData({ docs }) {
        return docs.map((doc) => {
            return {
                ...doc.data(),
            };
        });
    }
};
exports.AwService = AwService;
exports.AwService = AwService = __decorate([
    (0, common_1.Injectable)()
], AwService);
//# sourceMappingURL=aw.service.js.map