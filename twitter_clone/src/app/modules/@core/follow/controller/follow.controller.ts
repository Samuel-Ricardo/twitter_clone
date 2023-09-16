import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { FollowService } from '../service';

@injectable()
export class FollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    private readonly service: FollowService,
  ) {}
}
