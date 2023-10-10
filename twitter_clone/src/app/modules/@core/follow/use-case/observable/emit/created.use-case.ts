import { injectable } from 'inversify';
import { FollowObservableSupport } from '../../../observable/observable.support';
import { IEmitFollowDTO } from '../../../DTO/observable/emit/created.dto';

@injectable()
export class EmitFollowUseCase extends FollowObservableSupport {
  async executeAsync(follow: IEmitFollowDTO) {
    this.observable.emitFollow(follow);
  }
}
