import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationsByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';
import { Notification } from '../entity';

export interface INotificationGateway {
  create(notification: ICreateNotificationDTO): Promise<Notification>;
  setVisualized(
    notification: ISetNotificationVisualizedDTO,
  ): Promise<Notification>;
  delete(notification: IDeleteNotificationDTO): Promise<void>;
  getByUser(notification: IGetNotificationsByUserDTO): Promise<Notification[]>;
}
