import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clinic, ClinicDocument } from './model/clinic.model';
import { CreateClinicInput } from './input/create-clinic.input';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(Clinic.name)
    private clinicModel: Model<ClinicDocument>,
  ) {}

  async createCLinic(input: CreateClinicInput): Promise<Clinic> {
    return await new this.clinicModel({ ...input }).save();
  }

  async cLinicsBoard(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const clinics = await this.clinicModel
      .find()
      .skip(skip)
      .limit(limit)
      .exec();
    const total = await this.clinicModel.countDocuments().exec();

    return {
      data: clinics,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
}
