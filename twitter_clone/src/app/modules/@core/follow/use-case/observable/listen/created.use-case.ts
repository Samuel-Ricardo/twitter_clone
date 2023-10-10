import { injectable } from 'inversify';
import { IListenFollowDTO } from '../../../DTO/observable/listen/created.dto';
import { FollowObservableSupport } from '../../../observable/observable.support';

@injectable()
export class ListenFollowUseCase extends FollowObservableSupport {
  async executeAsync(follow: IListenFollowDTO) {
    this.observable.listenFollow(follow);
  }
}
