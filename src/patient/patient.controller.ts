import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { PatientService } from './patient.service';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @ApiOperation({ summary: 'Find All Patients' })
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
  @Get('/patientsBoard')
  async patientsBoard(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('searchKey') searchKey = '',
  ) {
    return await this.patientService.patientsBoard(page, limit, searchKey);
  }
}
