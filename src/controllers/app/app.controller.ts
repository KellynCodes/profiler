import { ApiTags } from '@nestjs/swagger';
import { AppService } from './../../services/app/app.service';
import { Controller, Get } from '@nestjs/common';
import { HttpResponse } from 'src/data/utils/dto/HttpResponse';

@ApiTags('App')
@Controller('app/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HttpResponse<{}> {
    return this.appService.getHello();
  }
}
