import { IPostGateway } from '@/app/modules/@core/post/gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';

@injectable()
export class AxiosPostGateway extends AxiosHTTPGateway implements IPostGateway {
  readonly prefix = 'posts';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }
}
