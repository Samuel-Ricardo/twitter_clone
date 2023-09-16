import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { FollowService } from '../service';
import { ICreateFollowDTO } from '../DTO';

@injectable()
export class FollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    private readonly service: FollowService,
  ) {}

  async follow(user: ICreateFollowDTO) {
    const result = await this.service.create(user);
    return { user: result.toStruct() };
  }
}
