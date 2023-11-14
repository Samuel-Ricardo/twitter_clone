import { INotificationGateway } from '@/app/modules/@core/notification/gateway/notification.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreateNotificationDTO,
  ISetNotificationVisualizedDTO,
  IFindNotificationsByUserDTO,
  INotificationDTO,
  IDeleteNotificationDTO,
} from '@/app/modules/@core/notification/DTO';
import { Notification } from '@/app/modules/@core/notification/entity';

@injectable()
export class AxiosNotificationGateway
  extends AxiosHTTPGateway
  implements INotificationGateway
{
  readonly prefix = 'notifications';

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

  async findByUser(notification: IFindNotificationsByUserDTO) {
    const result = await this.get<{ notifications: INotificationDTO[] }>(
      `${this.fullURL}/user/${notification.userId}`,
    );

    return Notification.createArray(result.data.notifications);
  }

  swrGetByUser({ userId }: IFindNotificationsByUserDTO) {
    return this.useSWR<{ notifications: INotificationDTO[] }>(
      userId.length > 0 && `${this.fullURL}/user/${userId}`,
      this.fetcher,
    );
  }
}
