import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorInput {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clinic: string;
}
