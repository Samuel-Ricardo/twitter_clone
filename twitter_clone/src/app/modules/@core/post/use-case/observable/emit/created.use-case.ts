import { injectable } from 'inversify';
import { IEmitPostDTO } from '../../../DTO/observable/emit/created.dto';
import { PostObservableSupport } from '../../../observable/observable.support';

@injectable()
export class EmitPostUseCase extends PostObservableSupport {
  async executeAsync(post: IEmitPostDTO) {
    return await this.observable.emitPost(post);
  }
}
