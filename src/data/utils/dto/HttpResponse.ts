export class HttpResponse<T = null> {
  statusCode: number;
  message: string | object;
  data?: T;
}
