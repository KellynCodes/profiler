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
exports.CreateProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const gender_1 = require("../../../data/enum/gender");
class CreateProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kelechi Amos Omeh', description: 'users full name' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kelly', description: 'users username' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://profiler.netlify.app/uploads/[username].png',
        description: 'users profile picture.',
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'kellyncodes@gmail.com',
        description: 'users email address.',
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4idkfalWIDL8493dfDSDFkJSKldaji',
        description: 'users email address.',
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'users email address.',
    }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "accessCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nigeria', description: 'users country.' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'users age.' }),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'male', description: 'users gender' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'marks user as an active user.' }),
    __metadata("design:type", Boolean)
], CreateProfileDto.prototype, "isActive", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=createProfileDto.js.map