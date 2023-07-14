import { Gender } from '../../../data/enum/gender';
export declare class CreateProfileDto {
    senderName: string;
    receiverName: string;
    senderImage: string;
    receiverImage: string;
    email: string;
    trackingCode: string;
    origin: string;
    destinationCountry: string;
    age: number;
    gender: Gender;
    address: string;
    isActive: boolean;
}
