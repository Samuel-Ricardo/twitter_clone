import { inject, injectable, tagged } from 'inversify';
import { SCOPE } from '../../like.tag';
import { ReactiveLikeService } from '../../service/reactive/like.service';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class ReactiveLikeController {
  constructor(
    @inject(MODULE.LIKE.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveLikeService,
  ) {}
}
