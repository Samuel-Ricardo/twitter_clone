import { SWRResponse } from 'swr';
import { IFindNotificationsByUserDTO, INotificationDTO } from '../../../DTO';

export interface ISWRSupport {
  swrGetByUser(
    user: IFindNotificationsByUserDTO,
  ): SWRResponse<{ notifications: INotificationDTO[] }>;
}
