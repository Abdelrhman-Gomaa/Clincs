import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Doctor } from 'src/doctor/model/doctor.model';

export type ClinicDocument = HydratedDocument<Clinic>;

@Schema()
export class Clinic {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: Doctor.name }] })
  doctors: Types.ObjectId[];
}

export const ClinicSchema = SchemaFactory.createForClass(Clinic);
