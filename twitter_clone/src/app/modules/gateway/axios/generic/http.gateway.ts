import { inject, injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';
import { ISWRSupport } from '../../support/swr.support';
import swr from 'swr';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway, ISWRSupport {
  constructor(
    @inject(MODULE.CONFIG.API.URL)
    public readonly URL: string,
    @inject(MODULE.AXIOS)
    protected readonly client: typeof axios,
    protected readonly useSWR = swr,
  ) {
    this.setup();
  }

  async setup() {
    this.client.defaults.baseURL = this.URL;
  }

  fetcher = async (url: string) => {
    return (await this.client.get(url)).data;
  };

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
