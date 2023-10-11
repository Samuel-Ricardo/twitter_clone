import { ICommentObservable } from '@/app/modules/@core/comment/observable/comment.observable';
import { NodeObservable } from '../generic/generic.observable';
import { IEmitCommentDTO } from '@/app/modules/@core/comment/DTO/observable/emit/created.dto';
import { IListenCommentDTO } from '@/app/modules/@core/comment/DTO/observable/listen/created.dto';

export class NodeCommentObservable
  extends NodeObservable
  implements ICommentObservable
{
  emitComment(comment: IEmitCommentDTO) {
    return this.emit(this.EVENTS.COMMENT.CREATED, comment);
  }
  listenComment(scheduled: IListenCommentDTO) {
    return this.listen(this.EVENTS.COMMENT.CREATED, scheduled.action);
  }
}
