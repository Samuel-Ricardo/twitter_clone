import { injectable } from 'inversify';
import { IListenDislikeDTO } from '../../../../DTO/observable/listen/dislike.dto';
import { LikeObservableSupport } from '../../../../observable/observable.support';

@injectable()
export class ListenPostDislikeUseCase extends LikeObservableSupport {
  execute(schedule: IListenDislikeDTO) {
    this.observable.listenPostDislike(schedule);
  }
}
