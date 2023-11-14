import { IDeleteNotificationDTO } from '../..';

export interface ISubscribeNotificationDeletedDTO {
  job: (notification: IDeleteNotificationDTO) => any | Promise<any>;
}
