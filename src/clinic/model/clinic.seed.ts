import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clinic, ClinicDocument } from 'src/clinic/model/clinic.model';

@Injectable()
export class ClinicSeeder {
  constructor(
    @InjectModel(Clinic.name) private clinicModel: Model<ClinicDocument>,
  ) {}

  async seed() {
    const seedClinics = [
      {
        _id: '66d32d5e412bce69800a1a7a',
        name: 'Dental Clinic',
        description: 'We offer comprehensive dental services.',
        is_active: true,
      },
      {
        _id: '66d32d5e412bce69800a1a7b',
        name: 'Pediatric Clinic',
        description: 'Specialized in child healthcare.',
        is_active: true,
      },
    ];

    try {
      await this.clinicModel.insertMany(seedClinics);
      console.log('Clinics seeded successfully!');
    } catch (err) {
      console.error('Error seeding clinics:', err);
    }
  }
}
