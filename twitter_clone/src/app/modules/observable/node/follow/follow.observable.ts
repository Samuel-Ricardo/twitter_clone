import { IFollowObservable } from '@/app/modules/@core/follow/observable/follow.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IEmitFollowDTO } from '@/app/modules/@core/follow/DTO/observable/emit/created.dto';
import { IEmitUnfollowDTO } from '@/app/modules/@core/follow/DTO/observable/emit/deleted.dto';

export class NodeFollowObservable
  extends NodeObservable
  implements IFollowObservable
{
  emitFollow(follow: IEmitFollowDTO): any | Promise<any> {
    this.emit(this.EVENTS.FOLLOW.CREATED, follow);
  }

  emitUnfollow(unfollow: IEmitUnfollowDTO): any | Promise<any> {
    this.emit(this.EVENTS.FOLLOW.DELETED, unfollow);
  }
}
