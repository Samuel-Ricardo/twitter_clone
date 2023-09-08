import { inject, injectable } from 'inversify';
import { LikeService } from '../service';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class LikeController {
  constructor(
    @inject(MODULE.LIKE.SERVICE)
    private readonly service: LikeService,
  ) {}
}
