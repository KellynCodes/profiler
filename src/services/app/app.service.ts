import { HttpResponse } from './../../data/utils/dto/HttpResponse';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): HttpResponse<{}> {
    const res: HttpResponse<{}> = {
      message: 'Feel free to explore this api developed by @kellyncodes',
      statusCode: HttpStatus.OK,
      data: {
        author: '@kellyncodes',
        name: 'Kelechi Amos',
        about: 'Full-stack software engineer. dotnet | angular | nestJs',
      },
    };
    return res;
  }
}
