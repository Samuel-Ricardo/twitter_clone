import { injectable } from 'inversify';
import { IListenUnfollowDTO } from '../../../DTO/observable/listen/deleted.dto';
import { FollowObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenUnfollowUseCase extends FollowObservableSupport {
  async executeAsync(schedule: IListenUnfollowDTO) {
    this.observable.listenUnfollow(schedule);
  }
}
