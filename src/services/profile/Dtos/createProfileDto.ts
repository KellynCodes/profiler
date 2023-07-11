import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../../../data/enum/gender';
export class CreateProfileDto {
  @ApiProperty({ example: 'Kelechi Amos Omeh', description: 'users full name' })
  name: string;

  @ApiProperty({ example: 'kelly', description: 'users username' })
  username: string;

  @ApiProperty({
    example: 'https://profiler.netlify.app/uploads/[username].png',
    description: 'users profile picture.',
  })
  profileImage: string;

  @ApiProperty({
    example: 'kellyncodes@gmail.com',
    description: 'users email address.',
  })
  email: string;

  @ApiProperty({
    example: '4idkfalWIDL8493dfDSDFkJSKldaji',
    description: 'users email address.',
  })
  password: string;

  @ApiProperty({
    description: 'users email address.',
  })
  accessCode: string;

  @ApiProperty({ example: 'Nigeria', description: 'users country.' })
  country: string;

  @ApiProperty({ example: 30, description: 'users age.' })
  age: number;

  // @IsEnum(Gender, {message: `please enter a valid ${Gender}`})
  @ApiProperty({ example: 'male', description: 'users gender' })
  gender: Gender;

  @ApiProperty({ example: true, description: 'marks user as an active user.' })
  isActive: boolean;
}
