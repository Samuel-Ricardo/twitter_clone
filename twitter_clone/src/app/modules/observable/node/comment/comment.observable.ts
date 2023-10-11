import { ICommentObservable } from '@/app/modules/@core/comment/observable/comment.observable';
import { NodeObservable } from '../generic/generic.observable';

export class NodeCommentObservable
  extends NodeObservable
  implements ICommentObservable {}
