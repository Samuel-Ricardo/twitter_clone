import { inject, injectable } from 'inversify';
import { type ICommentObservable } from './comment.observable';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class CommentObservableSupport {
  constructor(
    @inject(MODULE.OBSERVABLE.NODE.COMMENT)
    protected readonly observable: ICommentObservable,
  ) {}
}
