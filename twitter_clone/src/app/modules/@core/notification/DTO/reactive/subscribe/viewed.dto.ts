import { ISetNotificationVisualizedDTO } from '../../set_visualized.dto';

export interface ISubscribeNotificationViewedDTO {
  job: (notification: ISetNotificationVisualizedDTO) => any | Promise<any>;
}
