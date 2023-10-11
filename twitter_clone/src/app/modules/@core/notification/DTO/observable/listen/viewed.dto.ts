import { IEmitNotificationViewedDTO } from '../emit';

export interface IListenNotificationViewedDTO {
  action: (notification: IEmitNotificationViewedDTO) => any | Promise<any>;
}
