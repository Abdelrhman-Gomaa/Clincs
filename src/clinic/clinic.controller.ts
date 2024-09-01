import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { ClinicService } from './clinic.service';

@ApiTags('Clinic')
@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}
}
