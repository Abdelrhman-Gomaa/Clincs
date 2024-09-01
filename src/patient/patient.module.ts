import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Patient, PatientSchema } from './model/patient.model';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientSeeder } from './model/patient.seed';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),
    DoctorModule,
  ],
  controllers: [PatientController],
  providers: [PatientService, PatientSeeder],
  exports: [PatientService, PatientSeeder],
})
export class PatientModule {}
