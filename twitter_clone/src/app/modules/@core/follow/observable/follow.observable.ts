import { IEmitFollowDTO } from '../DTO/observable/emit/created.dto';
import { IEmitUnfollowDTO } from '../DTO/observable/emit/deleted.dto';
import { IListenFollowDTO } from '../DTO/observable/listen/created.dto';
import { IListenUnfollowDTO } from '../DTO/observable/listen/deleted.dto';

export interface IFollowObservable {
  emitFollow(follow: IEmitFollowDTO): any | Promise<any>;
  emitUnfollow(unfollow: IEmitUnfollowDTO): any | Promise<any>;

  listenFollow(schedule: IListenFollowDTO): any | Promise<any>;
  listenUnfollow(schedule: IListenUnfollowDTO): any | Promise<any>;
}
