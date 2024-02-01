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
exports.CharactersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const characters_service_1 = require("./characters.service");
const character_entity_1 = require("./entities/character.entity");
const create_character_input_1 = require("./dto/create-character.input");
const update_character_input_1 = require("./dto/update-character.input");
let CharactersResolver = class CharactersResolver {
    constructor(charactersService) {
        this.charactersService = charactersService;
    }
    createCharacter(createCharacterInput) {
        return this.charactersService.create(createCharacterInput);
    }
    findAll() {
        return this.charactersService.findAll();
    }
    findOne(id) {
        return this.charactersService.findOne(id);
    }
    updateCharacter(updateCharacterInput) {
        return this.charactersService.update(updateCharacterInput.id, updateCharacterInput);
    }
    removeCharacter(id) {
        return this.charactersService.remove(id);
    }
};
exports.CharactersResolver = CharactersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => character_entity_1.Character),
    __param(0, (0, graphql_1.Args)('createCharacterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_input_1.CreateCharacterInput]),
    __metadata("design:returntype", void 0)
], CharactersResolver.prototype, "createCharacter", null);
__decorate([
    (0, graphql_1.Query)(() => [character_entity_1.Character], { name: 'characters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharactersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => character_entity_1.Character, { name: 'character' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharactersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => character_entity_1.Character),
    __param(0, (0, graphql_1.Args)('updateCharacterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_character_input_1.UpdateCharacterInput]),
    __metadata("design:returntype", void 0)
], CharactersResolver.prototype, "updateCharacter", null);
__decorate([
    (0, graphql_1.Mutation)(() => character_entity_1.Character),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CharactersResolver.prototype, "removeCharacter", null);
exports.CharactersResolver = CharactersResolver = __decorate([
    (0, graphql_1.Resolver)(() => character_entity_1.Character),
    __metadata("design:paramtypes", [characters_service_1.CharactersService])
], CharactersResolver);
//# sourceMappingURL=characters.resolver.js.map