import { INotificationObservable } from '@/app/modules/@core/notification/observable/notification.observable';
import { NodeObservable } from '../generic/generic.observable';

export class NodeNotificationObservable
  extends NodeObservable
  implements INotificationObservable {}
