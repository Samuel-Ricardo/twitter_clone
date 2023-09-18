import { injectable } from 'inversify';
import { INotificationDTO, NotificationType } from '../DTO';

@injectable()
export class Notification {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _type: NotificationType,
    private readonly _body: string,
    private readonly _eventId: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
    private readonly _visualizedAt?: Date | null,
  ) {}

  static create(notification: INotificationDTO) {
    return new Notification(
      notification.id,
      notification.userId,
      notification.type,
      notification.body,
      notification.eventId,
      notification.createdAt,
      notification.updatedAt,
      notification.visualizedAt,
    );
  }
}
