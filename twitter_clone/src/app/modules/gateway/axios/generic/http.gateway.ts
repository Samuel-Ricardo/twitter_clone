import { inject, injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';
import { ISWRSupport } from '../../support/swr.support';
import swr from 'swr';
import { MODULE } from '@/app/modules/app.registry';
import { CONFIG } from '@/app/modules/config/app.config';
import { GlobalUser } from '@/app/global/user.global';
import { type ICryptographer } from '@/app/modules/security/cryptography/cryptography.contract';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway, ISWRSupport {
  constructor(
    @inject(MODULE.AXIOS)
    protected readonly client: typeof axios,
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cypher: ICryptographer,
    //@inject(MODULE.CONFIG.API.URL)
    public readonly URL: string = CONFIG.API.URL,
    protected readonly useSWR = swr,
  ) {
    this.setup();
  }

  async setup() {
    this.client.defaults.baseURL = this.URL;
    this.client.defaults.headers.authorization = `Bearer ${this.userToken}`;
  }

  fetcher = async (url: string) => {
    let { data } = await this.client.get(url);

    return await this.decrypt(data);
  };

  async get<T>(path: string, config?: AxiosRequestConfig) {
    const response = await this.client.get<T>(`${this.URL}/${path}`, config);
    response.data = await this.decrypt(response.data);

    return response;
  }

  async post<T>(path: string, body: any, config?: AxiosRequestConfig) {
    const response = await this.client.post<T>(
      `${this.URL}/${path}`,
      this.encrypt(body),
      config,
    );
    response.data = await this.decrypt(response.data);

    console.log({ response });

    return response;
  }

  async put<T>(path: string, body: any, config?: AxiosRequestConfig) {
    const response = await this.client.put<T>(
      `${this.URL}/${path}`,
      body,
      config,
    );
    response.data = await this.decrypt(response.data);

    return response;
  }

  async patch<T>(path: string, body: any, config?: AxiosRequestConfig) {
    const response = await this.client.patch<T>(
      `${this.URL}/${path}`,
      body,
      config,
    );
    response.data = await this.decrypt(response.data);

    return response;
  }

  async delete<T>(path: string, config?: AxiosRequestConfig) {
    return await this.client.delete<T>(`${this.URL}/${path}`, config);
  }

  get server() {
    return this.client;
  }

  private get userToken() {
    return GlobalUser.user?.sessionToken ?? '';
  }

  private encrypt(data: any) {
    return { encrypted: this.cypher.encryptIv(JSON.stringify(data)) };
  }

  private decrypt(data: any) {
    Object.keys(data).forEach(async (key) => {
      if (typeof data[key] === 'string')
        data[key] = JSON.parse(await this.cypher.decryptIv(data[key]));
    });
    return data;
  }
}
