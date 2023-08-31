import { inject, injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';
import { ISWRSupport } from '../../support/swr.support';
import swr from 'swr';
//import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway, ISWRSupport {
  constructor(
    //    @inject(MODULE.CONFIG.API.URL)
    private readonly URL: string,
    private readonly client: typeof axios,
    private readonly useSWR = swr,
  ) {}

  async fetcher(url: string) {
    this.client.get(url).then((res) => res.data);
  }

  async get<T>(path: string, config?: AxiosRequestConfig) {
    return await this.client.get<T>(`${this.URL}/${path}`, config);
  }

  async post<T>(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.post<T>(`${this.URL}/${path}`, body, config);
  }

  async put<T>(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.put<T>(`${this.URL}/${path}`, body, config);
  }

  async patch<T>(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.patch<T>(`${this.URL}/${path}`, body, config);
  }

  async delete<T>(path: string, config?: AxiosRequestConfig) {
    return await this.client.delete<T>(`${this.URL}/${path}`, config);
  }
}
