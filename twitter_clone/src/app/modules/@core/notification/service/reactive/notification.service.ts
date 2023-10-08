import { injectable } from 'inversify';
import { IListenNotificationDTO } from '../../DTO/observable/listen/created.dto';
import { EmitNotificationUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenNotificationUseCase } from '../../use-case/observable/listen/created.use-case';
import { SubscribeNotificationUseCase } from '../../use-case/reactive/subscribe/created.use-case';

//singleton
@injectable()
export class ReactiveNotificationService {
  constructor(
    private readonly subscribeNotification: SubscribeNotificationUseCase,
    private readonly listenNotification: ListenNotificationUseCase,
    private readonly emitNotification: EmitNotificationUseCase, //private readonly listenNotification: ListenNotificationUseCase
  ) {}

  observehNotifications() {
    this.subscribeNotification.execute({
      job: (notification) => this.emitNotification.execute(notification),
    });
  }

  onCreate(schedule: IListenNotificationDTO) {
    this.listenNotification.execute(schedule);
  }

  onView() {}

  onDelete() {}
}
