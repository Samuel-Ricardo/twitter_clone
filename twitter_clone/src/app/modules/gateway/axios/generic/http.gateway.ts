import { injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway {
  constructor(
    private readonly URL: string,
    private readonly client: typeof axios,
  ) {}

  async get(path: string, config?: AxiosRequestConfig) {
    return await this.client.get(`${this.URL}/${path}`, config);
  }

  async post(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.post(`${this.URL}/${path}`, body, config);
  }

  async put(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.put(`${this.URL}/${path}`, body, config);
  }

  async patch(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.patch(`${this.URL}/${path}`, body, config);
  }
}
