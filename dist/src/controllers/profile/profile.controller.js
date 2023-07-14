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
exports.ProfileController = void 0;
const profile_service_1 = require("./../../services/profile/profile.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createProfileDto_1 = require("../../services/profile/Dtos/createProfileDto");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async createProfile(model) {
        return await this.profileService.createProfileAsync(model);
    }
    async updateProfle(id, model) {
        return await this.profileService.updateProfileAsync(id, model);
    }
    async getAllProfiles(query) {
        return await this.profileService.getAllProfileAsync(query);
    }
    async getProfile(trackingCode) {
        return await this.profileService.getProfileAsync(trackingCode);
    }
    async deleteProfile(trackingCode) {
        return await this.profileService.deleteProfileAsync(trackingCode);
    }
};
__decorate([
    (0, common_1.Post)('create-profile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProfileDto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Post)('update-profile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createProfileDto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfle", null);
__decorate([
    (0, common_1.Get)('profiles'),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: 'enter number of page to view.',
        example: 4,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'keyword',
        required: false,
        description: 'search profile by username.',
        example: 'kelly',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getAllProfiles", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'trackingCode',
        required: true,
        description: 'fetch profile by password',
        example: '4idkfalWIDL8493dfDSDFkJSKldaji',
    }),
    (0, common_1.Get)('profile/:trackingCode'),
    __param(0, (0, common_1.Param)('trackingCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'trackingCode',
        type: String,
        required: true,
        description: 'users password to access their profile',
        example: '4idkfalWIDL8493dfDSDFkJSKldaji',
    }),
    (0, common_1.Delete)('profile/:trackingCode'),
    __param(0, (0, common_1.Param)('trackingCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "deleteProfile", null);
ProfileController = __decorate([
    (0, swagger_1.ApiTags)('UserProfile'),
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map