import { injectable } from 'inversify';
import { LikeObservableSupport } from '../../../observable/observable.support';
import { ILikeDTO } from '../../../DTO';

@injectable()
export class EmitLikeCreatedUseCase extends LikeObservableSupport {
  execute(like: ILikeDTO) {
    this.observable.emitLike(like);
  }
}
