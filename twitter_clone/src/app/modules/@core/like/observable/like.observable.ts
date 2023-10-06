import { IEmitDislikeDTO } from '../DTO/observable/emit/dislike.dto';
import { IEmitLikeDTO } from '../DTO/observable/emit/like.dto';
import { IListenDislikeDTO } from '../DTO/observable/listen/dislike.dto';
import { IListenLikeDTO } from '../DTO/observable/listen/like.dto';

export interface ILikeObservable {
  emitLike(like: IEmitLikeDTO): any | Promise<any>;
  emitDislike(like: IEmitDislikeDTO): any | Promise<any>;

  listenPostLike(schedule: IListenLikeDTO): any | Promise<any>;
  listenCommentLike(schedule: IListenLikeDTO): any | Promise<any>;

  listenPostDislike(schedule: IListenDislikeDTO): any | Promise<any>;
  listenCommentDislike(schedule: IListenDislikeDTO): any | Promise<any>;

  emitPostLike(like: IEmitLikeDTO): any | Promise<any>;
  emitPostDislike(like: IEmitDislikeDTO): any | Promise<any>;

  emitCommentLike(like: IEmitLikeDTO): any | Promise<any>;
  emitCommentDislike(like: IEmitDislikeDTO): any | Promise<any>;
}
