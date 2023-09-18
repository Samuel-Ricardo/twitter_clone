import { SWRResponse } from 'swr';
import { INotificationDTO } from '../../../DTO';

export interface ISWRSupport {
  swrGetByUser(): SWRResponse<INotificationDTO[]>;
}
