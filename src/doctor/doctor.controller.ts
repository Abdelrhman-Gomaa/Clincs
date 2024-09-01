import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}
}
