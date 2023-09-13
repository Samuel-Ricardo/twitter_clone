import { injectable } from 'inversify';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { IFollowGateway } from '@/app/modules/@core/follow/gateway/follow.gateway';

@injectable()
export class AxiosFollowGateway
  extends AxiosHTTPGateway
  implements IFollowGateway
{
  readonly prefix = 'follow';

  get fullURL(): string {
    return `${this.fullURL}/${this.prefix}`;
  }
}
