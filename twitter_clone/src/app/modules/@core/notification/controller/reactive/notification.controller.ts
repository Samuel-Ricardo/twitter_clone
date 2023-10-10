import { inject, injectable, tagged } from 'inversify';
import { ReactiveNotificationService } from '../../service/reactive/notification.service';
import { IListenNotificationDTO } from '../../DTO/observable/listen';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '../../notification.tag';

//singleton
@injectable()
export class ReactiveNotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveNotificationService,
  ) {
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