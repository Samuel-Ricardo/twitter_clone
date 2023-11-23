import { injectable } from 'inversify';
import { IEmitDislikeDTO } from '../../../DTO/observable/emit/dislike.dto';
import { LikeObservableSupport } from '../../../observable/observable.support';

@injectable()
export class EmitLikeDeletedUseCase extends LikeObservableSupport {
  execute(like: IEmitDislikeDTO) {
    like.isComment
      ? this.observable.emitCommentDislike(like)
      : this.observable.emitPostDislike(like);

    //this.observable.emitDislike(like);
  }
}
