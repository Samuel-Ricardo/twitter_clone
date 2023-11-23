import { inject, injectable, tagged } from 'inversify';
import { ReactiveLikeService } from '../../service/reactive/like.service';
import { MODULE } from '@/app/modules/app.registry';
import { IListenLikeDTO } from '../../DTO/observable/listen/like.dto';
import { IListenDislikeDTO } from '../../DTO/observable/listen/dislike.dto';
import { SCOPE } from '@/app/modules/app.tag';

@injectable()
export class ReactiveLikeController {
  constructor(
    @inject(MODULE.LIKE.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveLikeService,
  ) {}

  onTweetLike(schedule: IListenLikeDTO) {
    console.log({ TWITERRRRRLIKEEEEEEEEE: schedule });
    this.service.onTweetLike(schedule);
  }

  onCommentLike(schedule: IListenLikeDTO) {
    this.service.onCommentLike(schedule);
  }

  onTweetDislike(schedule: IListenDislikeDTO) {
    this.service.onTweetDislike(schedule);
  }

  onCommentDislike(schedule: IListenDislikeDTO) {
    this.service.onCommentDislike(schedule);
  }
}
