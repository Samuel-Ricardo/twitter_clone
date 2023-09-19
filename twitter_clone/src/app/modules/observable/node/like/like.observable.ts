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
  listenLike(schedule: IListenLikeDTO) {
    throw new Error('Method not implemented.');
  }
  listenDislike(schedule: IListenDislikeDTO) {
    throw new Error('Method not implemented.');
  }
  emitLike(like: IEmitLikeDTO) {
    throw new Error('Method not implemented.');
  }
  emitDislike(like: IEmitDislikeDTO) {
    throw new Error('Method not implemented.');
  }
}
