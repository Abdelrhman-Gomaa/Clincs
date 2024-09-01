import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Doctor, DoctorSchema } from './model/doctor.model';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DoctorSeeder } from './model/doctor.seed';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService, DoctorSeeder],
  exports: [DoctorService, DoctorSeeder],
})
export class DoctorModule {}
