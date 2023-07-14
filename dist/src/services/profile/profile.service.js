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
exports.ProfileService = void 0;
const generate_access_code_1 = require("./../../data/utils/generate.access.code");
const user_1 = require("./../../data/models/user");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProfileService = class ProfileService {
    constructor(userModel, genAccessCode) {
        this.userModel = userModel;
        this.genAccessCode = genAccessCode;
    }
    async createProfileAsync(model) {
        const user = await this.userModel.findOne({ email: model.email }).exec();
        if (user != null) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'This profile already exist.',
            };
            return response;
        }
        model.trackingCode = this.genAccessCode.generateTrackingCode(20);
        const newUser = await this.userModel.create(model);
        if (newUser == null) {
            throw new common_1.BadRequestException(`Upload failed! with reason: ${newUser.errors.message}`);
        }
        const response = {
            statusCode: common_1.HttpStatus.OK,
            message: 'User created.',
            data: newUser,
        };
        return response;
    }
    async updateProfileAsync(id, model) {
        const user = await this.userModel.findById(id).exec();
        if (user == null) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'This profile does not exist.',
            };
            return response;
        }
        const updateUser = await this.userModel.findByIdAndUpdate(id, model, {
            new: true,
        });
        const response = {
            statusCode: common_1.HttpStatus.OK,
            message: `${user.receiverName}'s profile was updated successfully.`,
            data: updateUser,
        };
        return response;
    }
    async getProfileAsync(trackingCode) {
        const user = await this.userModel
            .findOne({ trackingCode: trackingCode })
            .exec();
        if (user == null) {
            throw new common_1.BadRequestException('User not found.');
        }
        const response = {
            statusCode: common_1.HttpStatus.OK,
            message: `${user.receiverName} was found`,
            data: user,
        };
        return response;
    }
    async getAllProfileAsync(query) {
        console.log(query);
        const keyword = query.keyword == null ? (query.keyword = '') : query.keyword;
        const page = query.page == null ? (query.page = 1) : Number(query.page);
        const resPerPage = 2;
        const skip = resPerPage * (page - 1);
        let filter = {};
        if (keyword != '') {
            filter = {
                username: {
                    $regex: keyword,
                    $options: 'i',
                },
            };
        }
        const user = await this.userModel
            .find(Object.assign({}, filter))
            .limit(10)
            .skip(skip)
            .exec();
        if (user.length <= 0) {
            throw new common_1.BadRequestException('No user found.');
        }
        const response = {
            statusCode: common_1.HttpStatus.OK,
            message: 'these are list of available profiles',
            data: user,
        };
        return response;
    }
    async deleteProfileAsync(trackingCode) {
        const user = await this.userModel
            .findOne({ trackingCode: trackingCode })
            .exec();
        if (user == null) {
            throw new common_1.BadRequestException('User not found.');
        }
        await user.deleteOne({
            trackingCode: trackingCode,
        });
        if (!user.$isDeleted) {
            const response = {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'this profile was not deleted.',
            };
            return response;
        }
        const response = {
            statusCode: common_1.HttpStatus.OK,
            message: 'this profile was deleted.',
        };
        return response;
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, generate_access_code_1.GenerateAccessCode])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map