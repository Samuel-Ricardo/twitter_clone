import { IEmitNotificationDTO } from '../emit/create.dto';

export interface IListenNotificationDTO {
  action: (notification: IEmitNotificationDTO) => any | Promise<any>;
}
