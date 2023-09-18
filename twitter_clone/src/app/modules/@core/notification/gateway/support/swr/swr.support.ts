import { SWRResponse } from 'swr';
import { INotificationDTO } from '../../../DTO';

export interface SWRSupport {
  swrGetByUser(): SWRResponse<INotificationDTO[]>;
}
