import { inject, injectable, tagged } from 'inversify';
import { ReactiveNotificationService } from '../../service/reactive/notification.service';
import {
  IListenNotificationDTO,
  IListenNotificationDeletedDTO,
  IListenNotificationViewedDTO,
} from '../../DTO/observable/listen';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '@/app/modules/app.tag';
import { IEmitNotificationViewedDTO } from '../../DTO/observable/emit';

@injectable()
export class ReactiveNotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveNotificationService,
  ) {
    this.observeAll();
  }

  private async observeAll() {
    this.service.observeNotifications();
    this.service.observeLikes();
    this.service.observeComments();
    this.service.observeFollows();
    this.service.observeTweets();
  }

  async onCreate(notification: IListenNotificationDTO) {
    await this.service.onCreate(notification);
  }

  async onDelete(notification: IListenNotificationDeletedDTO) {
    await this.service.onDelete(notification);
  }

  async onView(notification: IListenNotificationViewedDTO) {
    await this.service.onView(notification);
  }

  async emitVizualized(notification: IEmitNotificationViewedDTO) {
    await this.service.emitVizualized(notification);
  }
}
