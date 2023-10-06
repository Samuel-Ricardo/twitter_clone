import { injectable } from 'inversify';
import { IEmitDislikeDTO } from '../../../DTO/observable/emit/dislike.dto';
import { LikeObservableSupport } from '../../../observable/observable.support';

@injectable()
export class EmitDeleteLikeUseCase extends LikeObservableSupport {
  execute(like: IEmitDislikeDTO) {
    this.observable.emitDislike(like);
  }
}
