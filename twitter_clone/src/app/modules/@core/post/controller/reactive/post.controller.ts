import { inject, injectable, tagged } from 'inversify';
import { ReactivePostService } from '../../service/reactive/post.service';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '../../post.tag';

@injectable()
export class ReactivePostController {
  constructor(
    @inject(MODULE.POST.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactivePostService,
  ) {}
}
