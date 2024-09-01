import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ClinicModule } from './clinic/clinic.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      {
        connectionFactory: (connection) => {
          connection.plugin(require('mongoose-autopopulate'));
          connection.plugin(require('mongoose-paginate-v2'));
          return connection;
        },
      },
    ),
    UserModule,
    ClinicModule,
    DoctorModule,
    PatientModule,
    NoteModule,
  ],
})
export class AppModule {}
