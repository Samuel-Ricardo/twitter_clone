import { injectable } from 'inversify';
import { IListenDislikeDTO } from '../../../../DTO/observable/listen/dislike.dto';
import { LikeObservableSupport } from '../../../../observable/observable.support';

@injectable()
export class ListenCommentDislikeUseCase extends LikeObservableSupport {
  execute(like: IListenDislikeDTO) {
    this.observable.listenCommentDislike(like);
  }
}
