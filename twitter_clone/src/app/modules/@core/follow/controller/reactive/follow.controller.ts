import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable, tagged } from 'inversify';
import { SCOPE } from '../../follow.tag';
import { ReactiveFollowService } from '../../service/reactive/follow.service';

@injectable()
export class ReactiveFollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveFollowService,
  ) {}
}
