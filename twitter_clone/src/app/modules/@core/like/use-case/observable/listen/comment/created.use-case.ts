import { injectable } from 'inversify';
import { LikeObservableSupport } from '../../../../observable/observable.support';
import { IListenLikeDTO } from '../../../../DTO/observable/listen/like.dto';

@injectable()
export class ListenCommentLikeDTO extends LikeObservableSupport {
  execute(like: IListenLikeDTO) {
    this.observable.listenCommentLike(like);
  }
}
