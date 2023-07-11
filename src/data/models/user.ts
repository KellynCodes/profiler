import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../enum/gender';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true, unique: true })
  password: string;

  @Prop()
  accessCode: string;

  @Prop()
  age: number;

  @Prop()
  country: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop()
  isActive: boolean;

  @Prop()
  gender: Gender;
}

export const UserSchema = SchemaFactory.createForClass(User);
