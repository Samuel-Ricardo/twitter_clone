import { IFollowObservable } from '@/app/modules/@core/follow/observable/follow.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IEmitFollowDTO } from '@/app/modules/@core/follow/DTO/observable/emit/created.dto';

export class NodeFollowObservable
  extends NodeObservable
  implements IFollowObservable
{
  emitFollow(follow: IEmitFollowDTO): any | Promise<any> {
    throw new Error('Method not implemented.');
  }
}
