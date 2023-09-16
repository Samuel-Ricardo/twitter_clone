import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { FollowService } from '../service';
import { ICreateFollowDTO, IDeleteFollowDTO, IGetFollowersDTO } from '../DTO';

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

  async unfollow(user: IDeleteFollowDTO) {
    return await this.service.delete(user);
  }

  followersOf(user: IGetFollowersDTO) {
    return { followers: this.service.getFollowersOf(user) };
  }
}
