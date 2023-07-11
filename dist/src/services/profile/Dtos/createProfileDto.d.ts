import { Gender } from '../../../data/enum/gender';
export declare class CreateProfileDto {
    name: string;
    username: string;
    profileImage: string;
    email: string;
    password: string;
    accessCode: string;
    country: string;
    age: number;
    gender: Gender;
    isActive: boolean;
}
