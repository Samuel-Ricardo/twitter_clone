import { injectable } from 'inversify';
import { IListenCommentDTO } from '../../../DTO/observable/listen/created.dto';
import { CommentObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenCommentUseCase extends CommentObservableSupport {
  async executeAsync(comment: IListenCommentDTO) {
    return this.observable.listenComment(comment);
  }
}
