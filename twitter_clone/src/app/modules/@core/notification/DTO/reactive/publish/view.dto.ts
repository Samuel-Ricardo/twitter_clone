import { ISetNotificationVisualizedDTO } from '../..';

export interface IPublishNotificationViewedDTO<C> {
  notification: ISetNotificationVisualizedDTO;
  context?: C;
}
