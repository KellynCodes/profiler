import { RequestQuery } from './../../data/interfaces/request.query';
import { HttpResponse } from './../../data/utils/dto/HttpResponse';
import { User } from './../../data/models/user';
import { ProfileService } from './../../services/profile/profile.service';
import { CreateProfileDto } from '../../services/profile/Dtos/createProfileDto';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    createProfile(model: CreateProfileDto): Promise<HttpResponse<User>>;
    updateProfle(id: string, model: CreateProfileDto): Promise<HttpResponse<User>>;
    getAllProfiles(query: RequestQuery): Promise<HttpResponse<User[]>>;
    getProfile(password: string): Promise<HttpResponse<User>>;
    deleteProfile(password: string): Promise<HttpResponse>;
}
