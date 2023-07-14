import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../../../data/enum/gender';
export class CreateProfileDto {
  @ApiProperty({ example: 'kelechi', description: 'senders name.' })
  senderName: string;

  @ApiProperty({ example: 'Kennedy', description: 'receivers name.' })
  receiverName: string;

  @ApiProperty({
    example: 'https://profiler.netlify.app/uploads/[username].png',
    description: 'users profile picture.',
  })
  senderImage: string;

  @ApiProperty({
    example: 'https://profiler.netlify.app/uploads/[username].png',
    description: 'users profile picture.',
  })
  receiverImage: string;

  @ApiProperty({
    example: 'kellyncodes@gmail.com',
    description: 'users email address.',
  })
  email: string;

  trackingCode: string;

  @ApiProperty({ example: 'Nigeria', description: 'senders country.' })
  origin: string;

  @ApiProperty({ example: 'Nigeria', description: 'users country.' })
  destinationCountry: string;

  @ApiProperty({ example: 30, description: 'users age.' })
  age: number;

  @ApiProperty({ example: 'male', description: 'users gender' })
  gender: Gender;

  @ApiProperty({ example: 'Enugu, Nigeria', description: 'users address.' })
  address: string;

  @ApiProperty({ example: true, description: 'marks user as an active user.' })
  isActive: boolean;
}
