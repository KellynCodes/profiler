import { GenerateAccessCode } from './../../data/utils/generate.access.code';
import { RequestQuery } from './../../data/interfaces/request.query';
import { CreateProfileDto } from './Dtos/createProfileDto';
import { User } from './../../data/models/user';
import mongoose from 'mongoose';
import { HttpResponse } from '../../data/utils/dto/HttpResponse';
export declare class ProfileService {
    private userModel;
    private genAccessCode;
    constructor(userModel: mongoose.Model<User>, genAccessCode: GenerateAccessCode);
    createProfileAsync(model: CreateProfileDto): Promise<HttpResponse<User>>;
    updateProfileAsync(id: string, model: CreateProfileDto): Promise<HttpResponse<User>>;
    getProfileAsync(trackingCode: string): Promise<HttpResponse<User>>;
    getAllProfileAsync(query: RequestQuery): Promise<HttpResponse<User[]>>;
    deleteProfileAsync(password: string): Promise<HttpResponse>;
}
