import { GenerateAccessCode } from './../../data/utils/generate.access.code';
import { RequestQuery } from './../../data/interfaces/request.query';
import { CreateProfileDto } from './Dtos/createProfileDto';
import { User } from './../../data/models/user';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { HttpResponse } from '../../data/utils/dto/HttpResponse';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
    private genAccessCode: GenerateAccessCode,
  ) {}

  async createProfileAsync(
    model: CreateProfileDto,
  ): Promise<HttpResponse<User>> {
    const user = await this.userModel.findOne({ email: model.email }).exec();
    if (user != null) {
      const response: HttpResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'This profile already exist.',
      };
      return response;
    }

    model.trackingCode = this.genAccessCode.generateTrackingCode(20);
    const newUser = await this.userModel.create(model);
    if (newUser == null) {
      throw new BadRequestException(
        `Upload failed! with reason: ${newUser.errors.message}`,
      );
    }
    const response: HttpResponse<User> = {
      statusCode: HttpStatus.OK,
      message: 'User created.',
      data: newUser,
    };
    return response;
  }

  async updateProfileAsync(
    id: string,
    model: CreateProfileDto,
  ): Promise<HttpResponse<User>> {
    const user = await this.userModel.findById(id).exec();
    if (user == null) {
      const response: HttpResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'This profile does not exist.',
      };
      return response;
    }

    const updateUser = await this.userModel.findByIdAndUpdate(id, model, {
      new: true,
    });
    const response: HttpResponse<User> = {
      statusCode: HttpStatus.OK,
      message: `${user.receiverName}'s profile was updated successfully.`,
      data: updateUser,
    };
    return response;
  }

  async getProfileAsync(trackingCode: string): Promise<HttpResponse<User>> {
    const user = await this.userModel
      .findOne({ trackingCode: trackingCode })
      .exec();
    if (user == null) {
      throw new BadRequestException('User not found.');
    }
    const response: HttpResponse<User> = {
      statusCode: HttpStatus.OK,
      message: `${user.receiverName} was found`,
      data: user,
    };
    return response;
  }

  async getAllProfileAsync(query: RequestQuery): Promise<HttpResponse<User[]>> {
    console.log(query);

    const keyword: string =
      query.keyword == null ? (query.keyword = '') : query.keyword;
    const page: number =
      query.page == null ? (query.page = 1) : Number(query.page);
    const resPerPage: number = 2;
    const skip: number = resPerPage * (page - 1);
    let filter: {} = {};
    if (keyword != '') {
      filter = {
        username: {
          $regex: keyword,
          $options: 'i',
        },
      };
    }
    const user = await this.userModel
      .find({ ...filter })
      .limit(10)
      .skip(skip)
      .exec();
    if (user.length <= 0) {
      throw new BadRequestException('No user found.');
    }
    const response: HttpResponse<User[]> = {
      statusCode: HttpStatus.OK,
      message: 'these are list of available profiles',
      data: user,
    };
    return response;
  }

  async deleteProfileAsync(trackingCode: string): Promise<HttpResponse> {
    const user = await this.userModel
      .findOne({ trackingCode: trackingCode })
      .exec();
    if (user == null) {
      throw new BadRequestException('User not found.');
    }

    await user.deleteOne({
      trackingCode: trackingCode,
    });
    if (!user.$isDeleted) {
      const response: HttpResponse = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'this profile was not deleted.',
      };
      return response;
    }

    const response: HttpResponse = {
      statusCode: HttpStatus.OK,
      message: 'this profile was deleted.',
    };
    return response;
  }
}
