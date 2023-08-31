import { injectable } from 'inversify';
import { IHTTPGateway } from '../../generic/http.gateway';
import axios, { AxiosRequestConfig } from 'axios';

@injectable()
export class AxiosHTTPGateway implements IHTTPGateway {
  constructor(
    private readonly URL: string,
    private readonly client: typeof axios,
  ) {}
}
