import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Doctor } from 'src/doctor/model/doctor.model';
import { Patient } from 'src/patient/model/patient.model';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
  @Prop({ type: String, required: true })
  note: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({
    type: Types.ObjectId,
    ref: Doctor ? Doctor.name : 'Doctor',
    required: true,
  })
  doctor: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Patient ? Patient.name : 'Patient',
    required: true,
  })
  patient: Types.ObjectId;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
