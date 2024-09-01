import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from 'src/doctor/model/doctor.model';

@Injectable()
export class DoctorSeeder {
  constructor(
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}

  async seed() {
    const seedDoctors = [
      {
        _id: '66d32d5e412bce69800a1a7c',
        name: 'Dr Mohamed Salah',
        description: 'doctor description',
        is_active: true,
        clinic: '66d32d5e412bce69800a1a7a',
      },
      {
        _id: '66d32d5e412bce69800a1a7d',
        name: 'Dr Ahmed Hossam',
        description: 'doctor description',
        is_active: true,
        clinic: '66d32d5e412bce69800a1a7b',
      },
    ];

    try {
      await this.doctorModel.insertMany(seedDoctors);
      console.log('Doctors seeded successfully!');
    } catch (err) {
      console.error('Error seeding doctors:', err);
    }
  }
}
