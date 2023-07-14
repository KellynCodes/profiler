import { RequestQuery } from './../../data/interfaces/request.query';
import { HttpResponse } from './../../data/utils/dto/HttpResponse';
import { User } from './../../data/models/user';
import { ProfileService } from './../../services/profile/profile.service';
import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from '../../services/profile/Dtos/createProfileDto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@ApiTags('UserProfile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post('create-profile')
  async createProfile(
    @Body() model: CreateProfileDto,
  ): Promise<HttpResponse<User>> {
    return await this.profileService.createProfileAsync(model);
  }

  @Post('update-profile/:id')
  async updateProfle(
    @Param('id') id: string,
    @Body() model: CreateProfileDto,
  ): Promise<HttpResponse<User>> {
    return await this.profileService.updateProfileAsync(id, model);
  }

  @Get('profiles')
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'enter number of page to view.',
    example: 4,
  })
  @ApiQuery({
    name: 'keyword',
    required: false,
    description: 'search profile by username.',
    example: 'kelly',
  })
  async getAllProfiles(
    @Query() query: RequestQuery,
  ): Promise<HttpResponse<User[]>> {
    return await this.profileService.getAllProfileAsync(query);
  }

  @ApiParam({
    name: 'trackingCode',
    required: true,
    description: 'fetch profile by password',
    example: '4idkfalWIDL8493dfDSDFkJSKldaji',
  })
  @Get('profile/:trackingCode')
  async getProfile(
    @Param('trackingCode') trackingCode: string,
  ): Promise<HttpResponse<User>> {
    return await this.profileService.getProfileAsync(trackingCode);
  }

  @ApiParam({
    name: 'trackingCode',
    type: String,
    required: true,
    description: 'users password to access their profile',
    example: '4idkfalWIDL8493dfDSDFkJSKldaji',
  })
  @Delete('profile/:trackingCode')
  async deleteProfile(
    @Param('trackingCode') trackingCode: string,
  ): Promise<HttpResponse> {
    return await this.profileService.deleteProfileAsync(trackingCode);
  }
}
