import { inject, injectable } from 'inversify';
import { ListenCommentLikeUseCase } from '../../use-case/observable/listen/comment/created.use-case';
import { ListenCommentDislikeUseCase } from '../../use-case/observable/listen/comment/deleted.use-case';
import { ListenPostLikeUseCase } from '../../use-case/observable/listen/post/created.use-case';
import { ListenPostDislikeUseCase } from '../../use-case/observable/listen/post/deleted.use-case';
import { MODULE } from '@/app/modules/app.registry';
import { IListenLikeDTO } from '../../DTO/observable/listen/like.dto';

@injectable()
export class ReactiveLikeService {
  constructor(
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.POST.CREATED)
    private readonly listenPostLike: ListenPostLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.POST.DELETED)
    private readonly listenPostDislike: ListenPostDislikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.COMMENT.CREATED)
    private readonly ListenCommentLike: ListenCommentLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.OBSERVABLE.LISTEN.COMMENT.DELETED)
    private readonly listenCommentDislike: ListenCommentDislikeUseCase,
  ) {}

  async listenTweetLike(schedule: IListenLikeDTO) {
    this.listenPostLike.execute(schedule);
  }

  async listenTweetDislike(schedule: IListenLikeDTO) {
    this.listenPostDislike.execute(schedule);
  }
}
