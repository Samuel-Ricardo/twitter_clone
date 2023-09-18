import { injectable } from 'inversify';
import { INotificationDTO } from '../DTO';
import { notificationSchema } from '../validator/schema/notification.schema';
import { NotificationType } from '.';

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
  ) {
    Notification.validate({
      id: _id,
      userId: _userId,
      type: _type,
      body: _body,
      eventId: _eventId,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      visualizedAt: _visualizedAt,
    });
  }

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

  static validate(data: INotificationDTO) {
    return notificationSchema.parse(data);
  }
}
