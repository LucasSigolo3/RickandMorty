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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RickAndMortyService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
let RickAndMortyService = class RickAndMortyService {
    constructor(httpService, characterModel) {
        this.httpService = httpService;
        this.characterModel = characterModel;
    }
    async fetchAndSaveCharacter(id) {
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`https://rickandmortyapi.com/api/character/${id}`));
        const characterData = response.data;
        const createdCharacter = new this.characterModel(characterData);
        return createdCharacter.save();
    }
    async findAll() {
        return this.characterModel.find().exec();
    }
};
exports.RickAndMortyService = RickAndMortyService;
exports.RickAndMortyService = RickAndMortyService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('Character')),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], RickAndMortyService);
//# sourceMappingURL=rick-and-morty.service.js.map