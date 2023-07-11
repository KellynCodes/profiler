export declare class HttpResponse<T = null> {
    statusCode: number;
    message: string | object;
    data?: T;
}
