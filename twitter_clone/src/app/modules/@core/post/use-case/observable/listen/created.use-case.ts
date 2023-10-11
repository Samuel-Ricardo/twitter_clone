import { injectable } from 'inversify';
import { PostObservableSupport } from '../../../observable/observable.support';
import { IListenPostDTO } from '../../../DTO/observable/listen/created.dto';

@injectable()
export class ListenPostUseCase extends PostObservableSupport {
  async executeAsync(schedule: IListenPostDTO) {
    return this.observable.listenPost(schedule);
  }
}
