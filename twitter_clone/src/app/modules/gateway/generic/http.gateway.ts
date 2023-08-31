export interface IHTTPGateway {
  readonly URL: string;
  readonly client: any;

  get(path: string, config?: any): Promise<any>;

  post(path: string, body: any, config?: any): Promise<any>;

  put(path: string, body: any, config?: any): Promise<any>;

  patch(path: string, body: any, config?: any): Promise<any>;

  delete(path: string, config?: any): Promise<any>;
}
