import { INotificationGateway } from '@/app/modules/@core/notification/gateway/notification.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreateNotificationDTO,
  ISetNotificationVisualizedDTO,
  IGetNotificationsByUserDTO,
  INotificationDTO,
} from '@/app/modules/@core/notification/DTO';
import { Notification } from '@/app/modules/@core/notification/entity';
import { SWRResponse } from 'swr';

@injectable()
export class AxiosNotificationGateway
  extends AxiosHTTPGateway
  implements INotificationGateway
{
  readonly prefix = 'notification';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(notification: ICreateNotificationDTO): Promise<Notification> {
    const result = await this.post<{ notification: INotificationDTO }>(
      this.fullURL,
      notification,
    );

    return Notification.create(result.data.notification);
  }
  setVisualized(
    notification: ISetNotificationVisualizedDTO,
  ): Promise<Notification> {
    throw new Error('Method not implemented.');
  }
  getByUser(notification: IGetNotificationsByUserDTO): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
  swrGetByUser(): SWRResponse<INotificationDTO[], any, any> {
    throw new Error('Method not implemented.');
  }
}
