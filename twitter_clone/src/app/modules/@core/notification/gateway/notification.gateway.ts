import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationsByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';
import { Notification } from '../entity';
import { ISWRSupport } from './support/swr/swr.support';

export interface INotificationGateway extends ISWRSupport {
  create(notification: ICreateNotificationDTO): Promise<Notification>;
  setVisualized(
    notification: ISetNotificationVisualizedDTO,
  ): Promise<Notification>;
  delete(notification: IDeleteNotificationDTO): Promise<void>;
  getByUser(notification: IGetNotificationsByUserDTO): Promise<Notification[]>;
}
