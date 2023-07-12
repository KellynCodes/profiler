"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const generate_access_code_1 = require("./../../data/utils/generate.access.code");
const user_1 = require("./../../data/models/user");
const profile_service_1 = require("./../../services/profile/profile.service");
const exceptionHandler_1 = require("./../../middleware/exceptionHandler");
const profile_controller_1 = require("./../profile/profile.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const app_service_1 = require("./../../services/app/app.service");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_LOCAL_URI),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_1.UserSchema }]),
        ],
        controllers: [app_controller_1.AppController, profile_controller_1.ProfileController],
        providers: [
            app_service_1.AppService,
            profile_service_1.ProfileService,
            generate_access_code_1.GenerateAccessCode,
            {
                provide: core_1.APP_FILTER,
                useClass: exceptionHandler_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map