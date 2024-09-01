import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from 'src/patient/model/patient.model';

@Injectable()
export class PatientSeeder {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async seed() {
    const seedPatients = [
      {
        _id: '66d32d5e412bce69800a1a7e',
        name: 'Ahmed Fathy',
        description: 'patient description',
        is_active: true,
        doctor: '66d32d5e412bce69800a1a7c',
        clinic: '66d32d5e412bce69800a1a7a',
      },
      {
        _id: '66d32d5e412bce69800a1a7f',
        name: 'Ibrahim Adel',
        description: 'patient description',
        is_active: true,
        doctor: '66d32d5e412bce69800a1a7d',
        clinic: '66d32d5e412bce69800a1a7b',
      },
    ];

    try {
      await this.patientModel.insertMany(seedPatients);
      console.log('Patients seeded successfully!');
    } catch (err) {
      console.error('Error seeding patients:', err);
    }
  }
}
