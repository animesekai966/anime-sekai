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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const app_service_1 = require("./app.service");
const aw_service_1 = require("./sources/aw/aw.service");
const sa_service_1 = require("./sources/sa/sa.service");
const af_service_1 = require("./sources/af/af.service");
const app = (0, app_1.initializeApp)({
    storageBucket: 'animefirev4.appspot.com',
    projectId: 'animefirev4',
});
const db = (0, firestore_1.getFirestore)(app);
let AppController = class AppController {
    constructor(appService, awService, saService, afService) {
        this.appService = appService;
        this.awService = awService;
        this.saService = saService;
        this.afService = afService;
    }
    async getHello() {
        const animeQuery = (0, firestore_1.query)((0, firestore_1.collection)(db, 'anime', '1', 'episodes'));
        return this.docsData(await (0, firestore_1.getDocs)(animeQuery));
    }
    async getAnimeList(limit) {
        return this.awService.listAnime({ limit });
    }
    async getAnime(malId, name, includeEps, includeEpServers) {
        return this.awService.getAnime({
            malId,
            name,
            include: {
                episodes: includeEps ? { servers: includeEpServers } : includeEps,
            },
        });
    }
    async getAnimeListAf(limit) {
        return this.afService.listAnime({ limit });
    }
    async getAnimeAf(id, malId, includeEps) {
        return this.afService.getAnime({
            id,
            malId,
            include: {
                episodes: includeEps,
            },
        });
    }
    async getAnimeListSA(page) {
        return this.saService.listAnime({ page });
    }
    async getAnimeSA(id, includeEpServers) {
        return this.saService.getAnime({
            id: id,
            include: {
                episodes: { servers: includeEpServers },
            },
        });
    }
    docsData({ docs }) {
        return docs.map((doc) => {
            return {
                ...doc.data(),
            };
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/aw/animelist'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnimeList", null);
__decorate([
    (0, common_1.Get)('/aw/anime'),
    __param(0, (0, common_1.Query)('malId')),
    __param(1, (0, common_1.Query)('name')),
    __param(2, (0, common_1.Query)('include.episodes')),
    __param(3, (0, common_1.Query)('include.episodes.servers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, Boolean]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnime", null);
__decorate([
    (0, common_1.Get)('/af/animelist'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnimeListAf", null);
__decorate([
    (0, common_1.Get)('/af/anime'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('malId')),
    __param(2, (0, common_1.Query)('include.episodes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnimeAf", null);
__decorate([
    (0, common_1.Get)('/sa/animelist'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnimeListSA", null);
__decorate([
    (0, common_1.Get)('/sa/anime'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('include.episodes.servers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAnimeSA", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        aw_service_1.AwService,
        sa_service_1.SaService,
        af_service_1.AfService])
], AppController);
//# sourceMappingURL=app.controller.js.map