import { ILikeObservable } from '@/app/modules/@core/like/observable/like.observable';
import { NodeObservable } from '../generic/generic.observable';
import { injectable } from 'inversify';
import { IEmitDislikeDTO } from '@/app/modules/@core/like/DTO/observable/emit/dislike.dto';
import { IEmitLikeDTO } from '@/app/modules/@core/like/DTO/observable/emit/like.dto';
import { IListenDislikeDTO } from '@/app/modules/@core/like/DTO/observable/listen/dislike.dto';
import { IListenLikeDTO } from '@/app/modules/@core/like/DTO/observable/listen/like.dto';

@injectable()
export class NodeLikeObservable
  extends NodeObservable
  implements ILikeObservable
{
  listenPostLike(scheduled: IListenLikeDTO) {
    this.listen(this.EVENTS.LIKE.POST, scheduled.action);
  }

  listenCommentLike(schedule: IListenLikeDTO) {
    this.listen(this.EVENTS.LIKE.COMMENT, schedule.action);
  }
  listenPostDislike(schedule: IListenDislikeDTO) {
    this.listen(this.EVENTS.DISLIKE.POST, schedule.action);
  }
  listenCommentDislike(schedule: IListenDislikeDTO) {
    this.listen(this.EVENTS.DISLIKE.COMMENT, schedule.action);
  }
  emitPostLike(like: IEmitLikeDTO) {
    this.emit(this.EVENTS.LIKE.POST, like);
  }
  emitPostDislike(like: IEmitDislikeDTO) {
    throw new Error('Method not implemented.');
  }
  emitCommentLike(like: IEmitLikeDTO) {
    throw new Error('Method not implemented.');
  }
  emitCommentDislike(like: IEmitDislikeDTO) {
    throw new Error('Method not implemented.');
  }
}
