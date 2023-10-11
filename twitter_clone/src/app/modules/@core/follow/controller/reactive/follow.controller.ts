import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable, tagged } from 'inversify';
import { SCOPE } from '../../follow.tag';
import { ReactiveFollowService } from '../../service/reactive/follow.service';
import { IEmitFollowDTO } from '../../DTO/observable/emit/created.dto';
import { IEmitUnfollowDTO } from '../../DTO/observable/emit/deleted.dto';

@injectable()
export class ReactiveFollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveFollowService,
  ) {}

  async emitFollow(follow: IEmitFollowDTO) {
    await this.service.emitFollow(follow);
  }

  async emitUnfollow(unfollow: IEmitUnfollowDTO) {
    await this.service.emitUnfollow(unfollow);
  }
}
