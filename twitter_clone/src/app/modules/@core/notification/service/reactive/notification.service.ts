import { inject, injectable } from 'inversify';
import { IListenNotificationDTO } from '../../DTO/observable/listen/created.dto';
import { EmitNotificationUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenNotificationUseCase } from '../../use-case/observable/listen/created.use-case';
import { SubscribeNotificationUseCase } from '../../use-case/reactive/subscribe/created.use-case';
import { FOLLOW, LIKE, POST, COMMENT } from '../../entity';
import { PostController } from '../../../post';
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

//singleton
@injectable()
export class ReactiveNotificationService {
  constructor(
    private readonly notification: NotificationController,
    @inject(MODULE.LIKE.REACTIVE)
    private readonly likeModule: ReactiveLikeController,
    @inject(MODULE.FOLLOW.REACTIVE)
    private readonly reactiveFollow: ReactiveFollowController,
    @inject(MODULE.POST.REACTIVE)
    private readonly reactivePost: ReactivePostController,
    @inject(MODULE.COMMENT.REACTIVE)
    private readonly reactiveComment: ReactiveCommentController,
    @inject(MODULE.FOLLOW.MAIN)
    private readonly followModule: FollowController,
    @inject(MODULE.POST.MAIN)
    private readonly postModule: PostController,
    @inject(MODULE.COMMENT.MAIN)
    private readonly commentModule: CommentController,
    @inject(MODULE.USER.MAIN)
    private readonly userModule: UserController,
    private readonly subscribeNotification: SubscribeNotificationUseCase,
    private readonly listenNotification: ListenNotificationUseCase,
    private readonly emitNotification: EmitNotificationUseCase,
    private readonly listenNotificationViewed: ListenNotificationViewedUseCase,
    private readonly listenNotificationDeleted: ListenNotificationDeletedUseCase,
  ) {}

  observeNotifications() {
    this.subscribeNotification.execute({
      job: (notification) => this.emitNotification.execute(notification),
    });
  }

  observeLikes() {
    this.observeTweetLikes();
    this.observeCommentLikes();
  }

  observeTweets() {
    this.reactivePost.onPost({
      action: async (post) => {
        const { user: author } = await this.userModule.findByIdAsync({
          id: post.authorId,
        });

        const { followers } = await this.followModule.followersOfAsync({
          followingId: post.authorId,
        });

        followers.forEach((follower) => {
          this.notification.create({
            type: POST,
            body: `@${author.username} Post a new Tweet 🚀 - ${post.body.slice(
              0,
              8,
            )}...`,
            userId: follower.id,
            eventId: post.id,
          });
        });
      },
    });
  }

  observeComments() {
    this.reactiveComment.onComment({
      action: async (comment) => {
        const { user: author } = await this.userModule.findByIdAsync({
          id: comment.authorId,
        });

        const { post } = await this.postModule.findByIdAsync({
          id: comment.postId,
        });

        this.notification.create({
          type: COMMENT,
          body: `@${
            author.username
          } comment on your post - ${comment.body.slice(0, 5)}...`,
          userId: post.authorId,
          eventId: comment.id,
        });
      },
    });
  }

  observeFollows() {
    this.reactiveFollow.onFollow({
      action: async (follow) => {
        const { user: follower } = await this.userModule.findByIdAsync({
          id: follow.followerId,
        });
        this.notification.create({
          type: FOLLOW,
          body: `${follower.name} Follow you 👀`,
          userId: follow.followingId,
          eventId: follow.id,
        });
      },
    });
  }

  observeTweetLikes() {
    this.likeModule.onTweetLike({
      action: async (like) => {
        const { post } = await this.postModule.findByIdAsync({
          id: like.likedId,
        });
        this.notification.create({
          type: LIKE,
          body: `Someone Like Your Tweet 👍 - ${post.body.slice(0, 8)}...`,
          userId: post.authorId,
          eventId: like.id,
        });
      },
    });
  }

  observeCommentLikes() {
    this.likeModule.onCommentLike({
      action: async (like) => {
        const { comment } = await this.commentModule.findAsyncByID({
          id: like.likedId,
        });
        this.notification.create({
          type: LIKE,
          body: `Someone Like Your Comment 👍 - ${comment.body.slice(
            0,
            15,
          )}...`,
          userId: comment.authorId,
          eventId: like.id,
        });
      },
    });
  }

  onCreate(schedule: IListenNotificationDTO) {
    this.listenNotification.execute(schedule);
  }

  onView(schedule: IListenNotificationViewedDTO) {
    this.listenNotificationViewed.executeAsync(schedule);
  }

  onDelete(schedule: IListenNotificationDeletedDTO) {
    this.listenNotificationDeleted.executeAsync(schedule);
  }
}
