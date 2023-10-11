import { IPostObservable } from '@/app/modules/@core/post/observable/post.observable';
import { NodeObservable } from '../generic/generic.observable';

export class NodePostObservable
  extends NodeObservable
  implements IPostObservable {}
