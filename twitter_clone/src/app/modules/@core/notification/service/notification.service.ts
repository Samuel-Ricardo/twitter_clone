import { injectable } from 'inversify';
import { ICreateNotificationDTO } from '../DTO';
import { CreateNotificationUseCase } from '../use-case/create.use-case';

@injectable()
export class NotificationService {
  constructor(private readonly createNotification: CreateNotificationUseCase) {}

  create(notification: ICreateNotificationDTO) {
    this.createNotification.execute(notification);
  }
}
