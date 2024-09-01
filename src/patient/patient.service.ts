import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './model/patient.model';
import { CreatePatientInput } from './input/create-patient.input';
import { DoctorService } from 'src/doctor/doctor.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name)
    private patientModel: Model<PatientDocument>,
    private doctorService: DoctorService,
  ) {}

  async createPatient(input: CreatePatientInput): Promise<Patient> {
    const doctor = await this.doctorService.findDoctor(input.doctor);
    return await new this.patientModel({
      ...input,
      clinic: doctor.clinic,
    }).save();
  }

  async patientsBoard(page: number, limit: number, searchKey: string) {
    const skip = (page - 1) * limit;
    const query = searchKey
      ? {
          $or: [
            { name: new RegExp(searchKey, 'i') },
            { description: new RegExp(searchKey, 'i') },
          ],
        }
      : {};

    const patients = await this.patientModel
      .find(query)
      .populate([
        {
          path: 'clinic',
          select: '_id name',
        },
        {
          path: 'doctor',
          select: '_id name',
        },
      ])
      .skip(skip)
      .limit(limit)
      .exec();
    const total = await this.patientModel.countDocuments(query);

    return {
      data: patients,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
}
