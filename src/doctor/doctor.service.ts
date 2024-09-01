import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './model/doctor.model';
import { CreateDoctorInput } from './input/create-doctor.input';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name)
    private doctorModel: Model<DoctorDocument>,
  ) {}

  async findDoctor(id: string) {
    return await this.doctorModel.findById(id);
  }

  async createDoctor(input: CreateDoctorInput): Promise<Doctor> {
    return await new this.doctorModel({ ...input }).save();
  }

  async doctorsBoard(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const doctors = await this.doctorModel
      .find()
      .populate({
        path: 'clinic',
        select: '_id title',
      })
      .skip(skip)
      .limit(limit)
      .exec();
    const total = await this.doctorModel.countDocuments().exec();

    return {
      data: doctors,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
}
