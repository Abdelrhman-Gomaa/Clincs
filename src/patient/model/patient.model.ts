import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Clinic } from 'src/clinic/model/clinic.model';
import { Doctor } from 'src/doctor/model/doctor.model';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;

  @Prop({
    type: Types.ObjectId,
    ref: Doctor ? Doctor.name : 'Doctor',
    required: true,
  })
  doctor: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Clinic ? Clinic.name : 'Clinic',
    required: true,
  })
  clinic: Types.ObjectId;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
