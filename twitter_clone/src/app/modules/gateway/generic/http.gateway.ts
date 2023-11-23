export interface IHTTPGateway {
  get<T>(path: string, config?: any): Promise<any>;

  post<T>(path: string, body: any, config?: any): Promise<any>;

  put<T>(path: string, body: any, config?: any): Promise<any>;

  patch<T>(path: string, body: any, config?: any): Promise<any>;

  delete<T>(path: string, config?: any): Promise<any>;
}
