import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Clinic } from 'src/clinic/model/clinic.model';
import { Patient } from 'src/patient/model/patient.model';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;

  @Prop({
    type: Types.ObjectId,
    ref: Clinic ? Clinic.name : 'Clinic',
    required: true,
  })
  clinic: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: Patient.name }] })
  patients: Types.ObjectId[];
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
