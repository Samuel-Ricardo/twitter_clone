import { inject, injectable, tagged } from 'inversify';
import { ReactivePostService } from '../../service/reactive/post.service';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '../../../../app.tag';
import { IEmitPostDTO } from '../../DTO/observable/emit/created.dto';
import { IListenPostDTO } from '../../DTO/observable/listen/created.dto';

@injectable()
export class ReactivePostController {
  constructor(
    @inject(MODULE.POST.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactivePostService,
  ) {}

  emitPost(post: IEmitPostDTO) {
    return this.service.emitPost(post);
  }

  onPost(post: IListenPostDTO) {
    return this.service.listenPost(post);
  }
}
