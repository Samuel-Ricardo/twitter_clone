import { INotificationDTO } from '@/app/modules/@core/notification/DTO';

export interface INotificationItemBodyProps {
  notification?: INotificationDTO;
  createdAt?: Date;
  visualizedAt?: Date;
  onClick?: any;
}
