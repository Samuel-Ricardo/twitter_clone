import { IPostObservable } from '@/app/modules/@core/post/observable/post.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IEmitPostDTO } from '@/app/modules/@core/post/DTO/observable/emit/created.dto';
import { IListenPostDTO } from '@/app/modules/@core/post/DTO/observable/listen/created.dto';

export class NodePostObservable
  extends NodeObservable
  implements IPostObservable
{
  emitPost(post: IEmitPostDTO) {
    return this.emit(this.EVENTS.POST.CREATED, post);
  }
  listenPost(schedule: IListenPostDTO) {
    return this.listen(this.EVENTS.POST.CREATED, schedule.action);
  }
}
