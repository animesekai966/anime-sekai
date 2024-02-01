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
exports.EpisodesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const episodes_service_1 = require("./episodes.service");
const episode_entity_1 = require("./entities/episode.entity");
const create_episode_input_1 = require("./dto/create-episode.input");
const update_episode_input_1 = require("./dto/update-episode.input");
let EpisodesResolver = class EpisodesResolver {
    constructor(episodesService) {
        this.episodesService = episodesService;
    }
    createEpisode(createEpisodeInput) {
        return this.episodesService.create(createEpisodeInput);
    }
    findAll() {
        return this.episodesService.findAll();
    }
    findOne(id) {
        return this.episodesService.findOne(id);
    }
    updateEpisode(updateEpisodeInput) {
        return this.episodesService.update(updateEpisodeInput.id, updateEpisodeInput);
    }
    removeEpisode(id) {
        return this.episodesService.remove(id);
    }
};
exports.EpisodesResolver = EpisodesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => episode_entity_1.Episode),
    __param(0, (0, graphql_1.Args)('createEpisodeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_episode_input_1.CreateEpisodeInput]),
    __metadata("design:returntype", void 0)
], EpisodesResolver.prototype, "createEpisode", null);
__decorate([
    (0, graphql_1.Query)(() => [episode_entity_1.Episode], { name: 'episodes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => episode_entity_1.Episode, { name: 'episode' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EpisodesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => episode_entity_1.Episode),
    __param(0, (0, graphql_1.Args)('updateEpisodeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_episode_input_1.UpdateEpisodeInput]),
    __metadata("design:returntype", void 0)
], EpisodesResolver.prototype, "updateEpisode", null);
__decorate([
    (0, graphql_1.Mutation)(() => episode_entity_1.Episode),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EpisodesResolver.prototype, "removeEpisode", null);
exports.EpisodesResolver = EpisodesResolver = __decorate([
    (0, graphql_1.Resolver)(() => episode_entity_1.Episode),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService])
], EpisodesResolver);
//# sourceMappingURL=episodes.resolver.js.map