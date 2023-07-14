import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../enum/gender';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  senderName: string;

  @Prop({ required: true })
  receiverName: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  trackingCode: string;

  @Prop()
  age: number;

  @Prop()
  isActive: boolean;

  @Prop()
  gender: Gender;

  @Prop()
  senderImage: string;

  @Prop()
  receiverImage: string;

  @Prop()
  destinationCountry: string;

  @Prop()
  address: string;

  @Prop()
  origin: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
