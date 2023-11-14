import { ICreateNotificationDTO } from '..';
import { IReactiveNotificationDTO } from './notification.dto';
import { ISubscribeNotificationCreatedDTO } from './subscribe/created.dto';

export interface INewNotificationDTO
  extends IReactiveNotificationDTO<
    ICreateNotificationDTO,
    ISubscribeNotificationCreatedDTO
  > {}
