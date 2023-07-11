import { GenerateAccessCode } from './../../data/utils/generate.access.code';
import { UserSchema } from './../../data/models/user';
import { ProfileService } from './../../services/profile/profile.service';
import { HttpExceptionFilter } from './../../middleware/exceptionHandler';
import { ProfileController } from './../profile/profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './../../services/app/app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_LOCAL_URI),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, ProfileController],
  providers: [
    AppService,
    ProfileService,
    GenerateAccessCode,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
