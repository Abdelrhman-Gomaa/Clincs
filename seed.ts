import { NestFactory } from '@nestjs/core';
import { ClinicSeeder } from './src/clinic/model/clinic.seed';
import { AppModule } from 'src/app.module';
import { DoctorSeeder } from 'src/doctor/model/doctor.seed';
import { PatientSeeder } from 'src/patient/model/patient.seed';
import { NoteSeeder } from 'src/note/model/note.seed';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const clinicSeeder = appContext.get(ClinicSeeder);
  const doctorSeeder = appContext.get(DoctorSeeder);
  const patientSeeder = appContext.get(PatientSeeder);
  const noteSeeder = appContext.get(NoteSeeder);

  await clinicSeeder.seed();
  await doctorSeeder.seed();
  await patientSeeder.seed();
  await noteSeeder.seed();

  await appContext.close();
}

bootstrap();
