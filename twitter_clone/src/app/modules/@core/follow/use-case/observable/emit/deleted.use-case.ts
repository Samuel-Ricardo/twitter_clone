import { injectable } from 'inversify';
import { IEmitUnfollowDTO } from '../../../DTO/observable/emit/deleted.dto';
import { FollowObservableSupport } from '../../../observable/observable.support';

@injectable()
export class EmitUnfollowUseCase extends FollowObservableSupport {
  async executeAsync(unfollow: IEmitUnfollowDTO) {
    this.observable.emitUnfollow(unfollow);
  }
}
