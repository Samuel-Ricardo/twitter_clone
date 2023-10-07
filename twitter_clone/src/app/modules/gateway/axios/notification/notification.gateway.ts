import { INotificationGateway } from '@/app/modules/@core/notification/gateway/notification.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';

@injectable()
export class AxiosNotificationGateway
  extends AxiosHTTPGateway
  implements INotificationGateway
{
  readonly prefix = 'notification';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }
}
