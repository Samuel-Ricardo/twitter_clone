import { inject, injectable } from 'inversify';
import { ListenCommentLikeUseCase } from '../../use-case/observable/listen/comment/created.use-case';
import { ListenCommentDislikeUseCase } from '../../use-case/observable/listen/comment/deleted.use-case';
import { ListenPostLikeUseCase } from '../../use-case/observable/listen/post/created.use-case';
import { ListenPostDislikeUseCase } from '../../use-case/observable/listen/post/deleted.use-case';
import { MODULE } from '@/app/modules/app.registry';
import { IListenLikeDTO } from '../../DTO/observable/listen/like.dto';
import { IListenDislikeDTO } from '../../DTO/observable/listen/dislike.dto';

@injectable()
export class ReactiveLikeService {
  constructor(
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.POST.CREATED)
    private readonly listenPostLike: ListenPostLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.POST.DELETED)
    private readonly listenPostDislike: ListenPostDislikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.COMMENT.CREATED)
    private readonly listenCommentLike: ListenCommentLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.COMMENT.DELETED)
    private readonly listenCommentDislike: ListenCommentDislikeUseCase,
  ) {}

  async onTweetLike(schedule: IListenLikeDTO) {
    this.listenPostLike.execute(schedule);
  }

  async onTweetDislike(schedule: IListenDislikeDTO) {
    this.listenPostDislike.execute(schedule);
  }

  async onCommentLike(schedule: IListenLikeDTO) {
    this.listenCommentLike.execute(schedule);
  }

  async onCommentDislike(schedule: IListenDislikeDTO) {
    this.listenCommentDislike.execute(schedule);
  }
}
