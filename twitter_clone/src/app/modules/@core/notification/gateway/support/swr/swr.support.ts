import { SWRResponse } from 'swr';
import { IGetNotificationsByUserDTO, INotificationDTO } from '../../../DTO';

export interface ISWRSupport {
  swrGetByUser(
    user: IGetNotificationsByUserDTO,
  ): SWRResponse<{ notifications: INotificationDTO[] }>;
}
