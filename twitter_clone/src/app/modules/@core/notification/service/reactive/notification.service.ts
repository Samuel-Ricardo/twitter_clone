import { inject, injectable } from 'inversify';
import { IListenNotificationDTO } from '../../DTO/observable/listen/created.dto';
import { EmitNotificationUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenNotificationUseCase } from '../../use-case/observable/listen/created.use-case';
import { SubscribeNotificationUseCase } from '../../use-case/reactive/subscribe/created.use-case';
import { ListenPostLikeUseCase } from '../../../like/use-case/observable/listen/post/created.use-case';
import { ListenPostDislikeUseCase } from '../../../like/use-case/observable/listen/post/deleted.use-case';
import { LIKE } from '../../entity';
import { PostController } from '../../../post';
import { NotificationController } from '../../controller/notification.controller';
import { MODULE } from '@/app/modules/app.registry';
import { ReactiveLikeController } from '../../../like/controller/reactive/like.controller';

//singleton
@injectable()
export class ReactiveNotificationService {
  constructor(
    private readonly notification: NotificationController,
    @inject(MODULE.POST.MAIN)
    private readonly postModule: PostController,
    @inject(MODULE.LIKE.REACTIVE)
    private readonly likeModule: ReactiveLikeController,
    private readonly subscribeNotification: SubscribeNotificationUseCase,
    private readonly listenNotification: ListenNotificationUseCase,
    private readonly emitNotification: EmitNotificationUseCase,
  ) {}

  observeNotifications() {
    this.subscribeNotification.execute({
      job: (notification) => this.emitNotification.execute(notification),
    });
  }

  observeLikes() {
    this.observeTweetLikes();
  }

  observeTweetLikes() {
    this.likeModule.onTweetLike({
      action: async (like) => {
        const { post } = await this.postModule.findByIdAsync({
          id: like.likedId,
        });
        this.notification.create({
          type: LIKE,
          body: `Someone Like Your Tweet 👍 - ${post.body.slice(0, 15)}...`,
          userId: post.authorId,
          eventId: like.id,
        });
      },
    });
  }

  onCreate(schedule: IListenNotificationDTO) {
    this.listenNotification.execute(schedule);
  }

  onView() {}

  onDelete() {}
}
