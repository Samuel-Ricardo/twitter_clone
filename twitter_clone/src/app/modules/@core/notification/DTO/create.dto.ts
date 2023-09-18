import { NotificationType } from '../entity';

export interface ICreateNotificationDTO {
  userId: string;
  type: NotificationType;
  body: string;
  eventId: string;
}
