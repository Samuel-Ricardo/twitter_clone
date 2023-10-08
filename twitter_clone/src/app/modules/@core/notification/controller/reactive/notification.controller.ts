import { injectable } from 'inversify';
import { ReactiveNotificationService } from '../../service/reactive/notification.service';
import { IListenNotificationDTO } from '../../DTO/observable/listen';

//singleton
@injectable()
export class ReactiveNotificationController {
  constructor(private readonly service: ReactiveNotificationService) {
    this.observeAll();
  }

  private observeAll() {
    this.service.observehNotifications();
    //    this.service.observeLikes();
    //    this.service.observeComments();
    //    this.service.observeFollows();
    //    this.service.observeTweets();
  }

  onCreate(notification: IListenNotificationDTO) {
    this.service.onCreate(notification);
  }
}
