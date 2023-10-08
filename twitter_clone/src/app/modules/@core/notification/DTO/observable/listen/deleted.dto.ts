import { IEmitNotificationDeletedDTO } from '../emit';

export interface IListenNotificationDeletedDTO {
  action: (notification: IEmitNotificationDeletedDTO) => any | Promise<any>;
}
