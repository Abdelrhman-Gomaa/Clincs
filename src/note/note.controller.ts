import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteInput } from './input/create-note.input';
import { NoteService } from './note.service';

@ApiTags('Note')
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @ApiOperation({ summary: 'Create A new Note' })
  @Post('/createNote')
  async createNote(@Body(ValidationPipe) input: CreateNoteInput) {
    return await this.noteService.createNote(input);
  }

  @ApiOperation({ summary: 'Find All Notes' })
  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'page',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'limit',
    required: false,
  })
  @ApiQuery({
    name: 'searchKey',
    type: String,
    description: 'searchKey',
    required: false,
  })
  @ApiQuery({
    name: 'doctor',
    type: String,
    description: 'doctor',
    required: false,
  })
  @ApiQuery({
    name: 'patient',
    type: String,
    description: 'patient',
    required: false,
  })
  @Get('/notesBoard')
  async notesBoard(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('searchKey') searchKey = '',
    @Query('doctor') doctor = '',
    @Query('patient') patient = '',
  ) {
    return await this.noteService.notesBoard(
      page,
      limit,
      searchKey,
      doctor,
      patient,
    );
  }
}
