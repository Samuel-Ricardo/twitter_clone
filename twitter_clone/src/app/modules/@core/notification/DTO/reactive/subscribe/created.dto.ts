import { INotificationDTO } from '../..';

export interface ISubscribeNotificationCreatedDTO {
  job: (notification: INotificationDTO) => any | Promise<any>;
}
