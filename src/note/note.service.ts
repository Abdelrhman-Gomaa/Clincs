import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Note, NoteDocument } from './model/note.model';
import { CreateNoteInput } from './input/create-note.input';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note.name)
    private noteModel: Model<NoteDocument>,
  ) {}

  async createNote(input: CreateNoteInput): Promise<Note> {
    return await new this.noteModel({ ...input }).save();
  }

  async notesBoard(
    page: number,
    limit: number,
    searchKey: string,
    doctor: string,
    patient: string,
  ) {
    const skip = (page - 1) * limit;
    console.log('>>>>>>>>> doctor', doctor);

    const query = {
      ...(searchKey && { note: new RegExp(searchKey, 'i') }),
      ...(doctor && { doctor: doctor }),
      ...(patient && { patient: patient }),
    };

    console.log('>>>>>> query', query);
    const notes = await this.noteModel
      .find(query)
      .populate([
        {
          path: 'patient',
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
    const total = await this.noteModel.countDocuments(query);

    return {
      data: notes,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
}
