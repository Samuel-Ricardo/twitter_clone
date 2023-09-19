import { IEmitDislikeDTO } from '../DTO/observable/emit/dislike.dto';
import { IEmitLikeDTO } from '../DTO/observable/emit/like.dto';
import { IListenDislikeDTO } from '../DTO/observable/listen/dislike.dto';
import { IListenLikeDTO } from '../DTO/observable/listen/like.dto';

export interface ILikeObservable {
  listenLike(schedule: IListenLikeDTO): any | Promise<any>;
  listenDislike(schedule: IListenDislikeDTO): any | Promise<any>;
  emitLike(like: IEmitLikeDTO): any | Promise<any>;
  emitDislike(like: IEmitDislikeDTO): any | Promise<any>;
}
