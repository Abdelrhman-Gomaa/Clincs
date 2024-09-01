import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NoteType } from 'src/constant/note-type';

export class CreateNoteInput {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  note: string;

  @ApiProperty()
  @IsEnum(NoteType)
  @IsOptional()
  type: NoteType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  doctor: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patient: string;
}
