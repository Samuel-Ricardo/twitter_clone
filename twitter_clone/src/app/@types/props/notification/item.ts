import { INotificationDTO } from '@/app/modules/@core/notification/DTO';
import { MouseEvent } from 'react';

export interface INotificationItemProps {
  notification: INotificationDTO;
  onClick?: ({
    event,
    notification,
  }: {
    event: MouseEvent;
    notification: INotificationDTO;
  }) => void | any;
}
