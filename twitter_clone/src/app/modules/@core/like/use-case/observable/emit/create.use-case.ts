import { injectable } from 'inversify';
import { LikeObservableSupport } from '../../../observable/observable.support';
import { IEmitLikeDTO } from '../../../DTO/observable/emit/like.dto';

@injectable()
export class EmitLikeCreatedUseCase extends LikeObservableSupport {
  execute(like: IEmitLikeDTO, isComment?: boolean) {
    console.log({ isComment });
    isComment
      ? this.observable.emitCommentLike(like)
      : this.observable.emitPostLike(like);
    //this.observable.emitLike(like);
  }
}
