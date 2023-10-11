import { injectable } from 'inversify';
import { CommentObservableSupport } from '../../../observable/observable.support';
import { IEmitCommentDTO } from '../../../DTO/observable/emit/created.dto';

@injectable()
export class EmitCommentUseCase extends CommentObservableSupport {
  async executeAsync(comment: IEmitCommentDTO) {
    return this.observable.emitComment(comment);
  }
}
