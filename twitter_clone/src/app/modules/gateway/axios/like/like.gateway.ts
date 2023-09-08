import { ILikeGateway } from '@/app/modules/@core/like/gateway/like.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';

export class AxiosLikeGateway extends AxiosHTTPGateway implements ILikeGateway {
  readonly prefix = 'likes';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }
}
