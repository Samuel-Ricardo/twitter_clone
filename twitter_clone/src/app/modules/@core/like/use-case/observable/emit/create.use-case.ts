import { injectable } from 'inversify';
import { LikeObservableSupport } from '../../../observable/observable.support';
import { IEmitLikeDTO } from '../../../DTO/observable/emit/like.dto';

@injectable()
export class EmitLikeCreatedUseCase extends LikeObservableSupport {
  execute(like: IEmitLikeDTO) {
    this.observable.emitLike(like);
  }
}
