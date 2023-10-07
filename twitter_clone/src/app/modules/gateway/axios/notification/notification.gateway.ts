import { INotificationGateway } from '@/app/modules/@core/notification/gateway/notification.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreateNotificationDTO,
  ISetNotificationVisualizedDTO,
  IGetNotificationsByUserDTO,
  INotificationDTO,
  IDeleteNotificationDTO,
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

  async create(notification: ICreateNotificationDTO) {
    const result = await this.post<{ notification: INotificationDTO }>(
      this.fullURL,
      notification,
    );

    return Notification.create(result.data.notification);
  }

  async setVisualized(notification: ISetNotificationVisualizedDTO) {
    const result = await this.post<{ notification: INotificationDTO }>(
      `${this.fullURL}/visualized`,
      notification,
    );

    return Notification.create(result.data.notification);
  }

  async deleteNotification(notification: IDeleteNotificationDTO) {
    await this.delete(`${this.fullURL}/${notification.id}`);
  }

  async getByUser(notification: IGetNotificationsByUserDTO) {
    const result = await this.get<{ notifications: INotificationDTO[] }>(
      `${this.fullURL}/user/${notification.userId}`,
    );

    return Notification.createArray(result.data.notifications);
  }
}
