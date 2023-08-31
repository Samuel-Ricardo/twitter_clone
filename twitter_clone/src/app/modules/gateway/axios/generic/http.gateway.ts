import { injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';
import { ISWRSupport } from '../../support/swr.support';
import swr from 'swr';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway, ISWRSupport {
  constructor(
    private readonly URL: string,
    private readonly client: typeof axios,
    private readonly useSWR = swr,
  ) {}

  async fetcher(url: string) {
    this.client.get(url).then((res) => res.data);
  }

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

  async delete(path: string, config?: AxiosRequestConfig) {
    return await this.client.delete(`${this.URL}/${path}`, config);
  }
}
