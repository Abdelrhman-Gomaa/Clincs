import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './note.model';
import { NoteType } from 'src/constant/note-type';

@Injectable()
export class NoteSeeder {
  constructor(
    @InjectModel(Note.name) private patientModel: Model<NoteDocument>,
  ) {}

  async seed() {
    const seedNotes = [
      {
        note: 'note message text from doctor to patient',
        type: NoteType.doctor_to_patient,
        patient: '66d32d5e412bce69800a1a7e',
        doctor: '66d32d5e412bce69800a1a7c',
      },
      {
        note: 'note message text from patient to doctor',
        type: NoteType.patient_to_doctor,
        patient: '66d32d5e412bce69800a1a7f',
        doctor: '66d32d5e412bce69800a1a7d',
      },
    ];

    try {
      await this.patientModel.insertMany(seedNotes);
      console.log('Notes seeded successfully!');
    } catch (err) {
      console.error('Error seeding patients:', err);
    }
  }
}
