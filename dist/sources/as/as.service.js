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
exports.AsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const https = require("https");
const http = require("http");
let AsService = class AsService {
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
};
exports.AsService = AsService;
exports.AsService = AsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AsService);
//# sourceMappingURL=as.service.js.map