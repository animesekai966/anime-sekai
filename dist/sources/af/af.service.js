"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfService = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const app = (0, app_1.initializeApp)({
    storageBucket: 'animefirev4.appspot.com',
    projectId: 'animefirev4',
}, 'animefire');
const db = (0, firestore_1.getFirestore)(app);
let AfService = class AfService {
    async listAnime(options) {
        const animeList = (0, firestore_1.query)((0, firestore_1.collection)(db, 'anime'), (0, firestore_1.limit)(options.limit));
        const animeListSnapshot = await (0, firestore_1.getDocs)(animeList);
        return this.docsData(animeListSnapshot);
    }
    async getAnime({ malId = '', id = '', ...options }) {
        const animeQuery = (0, firestore_1.query)((0, firestore_1.collection)(db, 'documents', 'anime', id));
        const animeListSnapshot = await (0, firestore_1.getDocs)(animeQuery);
        return animeListSnapshot;
        const anime = this.docsData(animeListSnapshot)[0];
        if (options.include.episodes) {
            anime.episodes = await this.getAnimeEps({
                id: anime.id,
            });
        }
        return anime;
    }
    async getAnimeEps(options) {
        const animeEpisodes = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'anime', String(options.id), 'episodes'));
        return this.docsData(animeEpisodes);
    }
    docsData({ docs }) {
        return docs.map((doc) => {
            return {
                ...doc.data(),
            };
        });
    }
};
exports.AfService = AfService;
exports.AfService = AfService = __decorate([
    (0, common_1.Injectable)()
], AfService);
//# sourceMappingURL=af.service.js.map