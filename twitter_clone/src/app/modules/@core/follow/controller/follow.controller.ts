import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { FollowService } from '../service';
import {
  ICountFollowersDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../DTO';

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

  followingOf(user: IGetFollowingDTO) {
    return { following: this.service.getFollowingOf(user) };
  }

  countFollowersOf(user: ICountFollowersDTO) {
    return { followers: this.service.countFollowersOf(user) };
  }
}
