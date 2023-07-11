import { AppService } from './../../services/app/app.service';
import { HttpResponse } from 'src/data/utils/dto/HttpResponse';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): HttpResponse<{}>;
}
