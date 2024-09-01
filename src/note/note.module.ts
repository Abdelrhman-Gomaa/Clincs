import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Note, NoteSchema } from './model/note.model';
import { NoteService } from './note.service';
import { NoteSeeder } from './model/note.seed';
import { DoctorModule } from 'src/doctor/doctor.module';
import { NoteController } from './note.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
    DoctorModule,
  ],
  controllers: [NoteController],
  providers: [NoteService, NoteSeeder],
  exports: [NoteService, NoteSeeder],
})
export class NoteModule {}
