import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type INotificationObservable } from './notification.observable';

@injectable()
export abstract class NotificationObservableSupport {
  constructor(
    @inject(MODULE.OBSERVABLE.NODE.NOTIFICATION)
    protected notification: INotificationObservable,
  ) {}
}
