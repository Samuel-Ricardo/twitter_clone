import { inject, injectable } from 'inversify';
import { IListenNotificationDTO } from '../../DTO/observable/listen/created.dto';
import { EmitNotificationUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenNotificationUseCase } from '../../use-case/observable/listen/created.use-case';
import { SubscribeNotificationUseCase } from '../../use-case/reactive/subscribe/created.use-case';
import { FOLLOW, LIKE, POST, COMMENT } from '../../entity';
import { PostController, postInject } from '../../../post';
import { NotificationController } from '../../controller/notification.controller';
import { MODULE } from '@/app/modules/app.registry';
import { ReactiveLikeController } from '../../../like/controller/reactive/like.controller';
import { CommentController } from '../../../comment/controller/comment.controller';
import { ReactiveFollowController } from '../../../follow/controller/reactive/follow.controller';
import { UserController } from '../../../user/controller';
import { ReactivePostController } from '../../../post/controller/reactive/post.controller';
import { FollowController } from '../../../follow/controller';
import { ReactiveCommentController } from '../../../comment/controller/reactive/comment.controller';
import {
  IListenNotificationDeletedDTO,
  IListenNotificationViewedDTO,
} from '../../DTO/observable/listen';
import { ListenNotificationViewedUseCase } from '../../use-case/observable/listen/viewed.use-case';
import { ListenNotificationDeletedUseCase } from '../../use-case/observable/listen/deleted.use-case';
import { SubscribeNotificationViewedUseCase } from '../../use-case/reactive/subscribe/viewed.use-case';
import { SubscribeNotificationDeletedUseCase } from '../../use-case/reactive/subscribe/deleted.use-case';
import { EmitNotificationViewedUSeCase } from '../../use-case/observable/emit/viewed.use-case';
import { EmitNotificationDeletedUseCase } from '../../use-case/observable/emit/deleted.use-case';
import { lazyInject as likeInject } from '../../../like/like.module';
import { lazyInject as commentInject } from '../../../comment/comment.module';
import { IEmitNotificationViewedDTO } from '../../DTO/observable/emit';
import { followInject } from '../../../follow/follow.module';
import { userInject } from '../../../user/user.module';
import { cut } from '@/app/modules/util/string';

//singleton
@injectable()
export class ReactiveNotificationService {
  @likeInject(MODULE.LIKE.REACTIVE)
  private readonly likeModule: ReactiveLikeController;
  @followInject(MODULE.FOLLOW.REACTIVE)
  private readonly reactiveFollow: ReactiveFollowController;
  @postInject(MODULE.POST.REACTIVE)
  private readonly reactivePost: ReactivePostController;
  @commentInject(MODULE.COMMENT.REACTIVE)
  private readonly reactiveComment: ReactiveCommentController;
  @followInject(MODULE.FOLLOW.MAIN)
  private readonly followModule: FollowController;
  @postInject(MODULE.POST.MAIN)
  private readonly postModule: PostController;
  @commentInject(MODULE.COMMENT.MAIN)
  private readonly commentModule: CommentController;
  @userInject(MODULE.USER.MAIN)
  private readonly userModule: UserController;

  constructor(
    @inject(MODULE.NOTIFICATION.MAIN)
    private readonly notification: NotificationController,
    @inject(MODULE.NOTIFICATION.USE_CASE.REACTIVE.SUBSCRIBE.CREATED)
    private readonly subscribeNotification: SubscribeNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.REACTIVE.SUBSCRIBE.VIEWED)
    private readonly subscribeNotificationViewed: SubscribeNotificationViewedUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.REACTIVE.SUBSCRIBE.DELETED)
    private readonly subscribeNotificationDeleted: SubscribeNotificationDeletedUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenNotification: ListenNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.LISTEN.VIEWED)
    private readonly listenNotificationViewed: ListenNotificationViewedUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.LISTEN.DELETED)
    private readonly listenNotificationDeleted: ListenNotificationDeletedUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitNotification: EmitNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.EMIT.VIEWED)
    private readonly emitNotificationViewed: EmitNotificationViewedUSeCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.OBSERVABLE.EMIT.DELETED)
    private readonly emitNotificationDeleted: EmitNotificationDeletedUseCase,
  ) {}

  async observeNotifications() {
    this.observerNotificationCreated();
    this.observerNotificationViewed();
    this.observerNotificationDeleted();
  }

  async observerNotificationCreated() {
    this.subscribeNotification.execute({
      job: (notification) => {
        console.log({ SUBSCRIBED: notification });
        this.emitNotification.execute(notification);
      },
    });
  }

  async observerNotificationViewed() {
    this.subscribeNotificationViewed.executeAsync({
      job: (notification) =>
        this.emitNotificationViewed.executeAsync(notification),
    });
  }

  async observerNotificationDeleted() {
    this.subscribeNotificationDeleted.executeAsync({
      job: (notification) =>
        this.emitNotificationDeleted.executeAsync(notification),
    });
  }

  async observeLikes() {
    this.observeTweetLikes();
    this.observeCommentLikes();
  }

  async observeTweets() {
    this.reactivePost.onPost({
      action: async (post) => {
        console.log('OBSERVE POST', { post });

        const { user: author } = await this.userModule.findByIdAsync({
          id: post.authorId,
        });

        console.log({ author });

        const { followers } = await this.followModule.followersOfAsync({
          followingId: post.authorId,
        });

        console.log({ followers });

        followers.forEach((follow) => {
          console.log({ follow: follow });
          this.notification.create({
            type: POST,
            body: `@${author.username} Post a new Tweet 🚀 - ${cut(post.body)}`,
            userId: follow.followerId,
            eventId: post.id,
          });
        });
      },
    });
  }

  async observeComments() {
    this.reactiveComment.onComment({
      action: async (comment) => {
        console.log('OBSERVE COMMENT', { comment });

        const { user: author } = await this.userModule.findByIdAsync({
          id: comment.authorId,
        });

        console.log({ author });

        const { post } = await this.postModule.findByIdAsync({
          id: comment.postId,
        });

        console.log({ post });

        this.notification.create({
          type: COMMENT,
          body: `@${author.username} comment on your post 💬 - ${cut(
            comment.body,
          )}`,
          userId: post.authorId,
          eventId: comment.id,
        });
      },
    });
  }

  async observeFollows() {
    this.reactiveFollow.onFollow({
      action: async (follow) => {
        console.log('OBSERVE FOLLOW', { follow });

        const { user: follower } = await this.userModule.findByIdAsync({
          id: follow.followerId,
        });

        console.log({ follower });

        this.notification.create({
          type: FOLLOW,
          body: `@${follower.username} Follow you 👀`,
          userId: follow.followingId,
          eventId: follow.id,
        });
      },
    });
  }

  async observeTweetLikes() {
    this.likeModule.onTweetLike({
      action: async (like) => {
        console.log('OBSERVE TWEET LIKE', { like });

        const { post } = await this.postModule.findByIdAsync({
          id: like.likedId,
        });

        console.log({ post });

        this.notification.create({
          type: LIKE,
          body: `Someone Like Your Tweet 👍 - ${cut(post.body)}`,
          userId: post.authorId,
          eventId: like.id,
        });
      },
    });
  }

  async observeCommentLikes() {
    this.likeModule.onCommentLike({
      action: async (like) => {
        console.log('OBSERVE COMMENT LIKE', { like });

        const { comment } = await this.commentModule.findAsyncByID({
          id: like.likedId,
        });

        console.log({ comment });

        this.notification.create({
          type: LIKE,
          body: `Someone Like Your Comment 👍 - ${cut(comment.body)}`,
          userId: comment.authorId,
          eventId: like.id,
        });
      },
    });
  }

  async onCreate(schedule: IListenNotificationDTO) {
    this.listenNotification.execute(schedule);
  }

  async onView(schedule: IListenNotificationViewedDTO) {
    this.listenNotificationViewed.executeAsync(schedule);
  }

  async onDelete(schedule: IListenNotificationDeletedDTO) {
    this.listenNotificationDeleted.executeAsync(schedule);
  }

  async emitVizualized(notification: IEmitNotificationViewedDTO) {
    await this.emitNotificationViewed.executeAsync(notification);
  }
}
