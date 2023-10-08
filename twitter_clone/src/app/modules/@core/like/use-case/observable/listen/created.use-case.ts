import { injectable } from 'inversify';
import { IListenLikeDTO } from '../../../DTO/observable/listen/like.dto';
import { LikeObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenPostLikeUseCase extends LikeObservableSupport {
  execute(schedule: IListenLikeDTO) {
    this.observable.listenPostLike(schedule);
  }
}
