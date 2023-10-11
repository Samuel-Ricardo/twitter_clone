import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IFindNotificationsByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';
import { Notification } from '../entity';
import { ISWRSupport } from './support/swr/swr.support';

export interface INotificationGateway extends ISWRSupport {
  create(notification: ICreateNotificationDTO): Promise<Notification>;
  setVisualized(
    notification: ISetNotificationVisualizedDTO,
  ): Promise<Notification>;
  deleteNotification(notification: IDeleteNotificationDTO): Promise<void>;
  findByUser(
    notification: IFindNotificationsByUserDTO,
  ): Promise<Notification[]>;
}
