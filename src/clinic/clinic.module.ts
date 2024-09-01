import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Clinic, ClinicSchema } from './model/clinic.model';
import { ClinicController } from './clinic.controller';
import { ClinicService } from './clinic.service';
import { ClinicSeeder } from './model/clinic.seed';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clinic.name, schema: ClinicSchema }]),
  ],
  controllers: [ClinicController],
  providers: [ClinicService, ClinicSeeder],
  exports: [ClinicService, ClinicSeeder],
})
export class ClinicModule {}
