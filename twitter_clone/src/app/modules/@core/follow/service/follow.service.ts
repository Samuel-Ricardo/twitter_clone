import { inject, injectable } from 'inversify';
import {
  CreateFollowUseCase,
  DeleteFollowUseCase,
  GetFollowersUseCase,
  GetFollowingUseCase,
  CountFollowersUseCase,
  CountFollowingUseCase,
} from '../use-case';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../DTO';

@injectable()
export class FollowService {
  constructor(
    @inject(MODULE.FOLLOW.USE_CASE.CREATE)
    private readonly createFollow: CreateFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.DELETE)
    private readonly deleteFollow: DeleteFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWERS)
    private readonly getFollowers: GetFollowersUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWING)
    private readonly getFollowing: GetFollowingUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWERS)
    private readonly countFollowers: CountFollowersUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWING)
    private readonly countFollowing: CountFollowingUseCase,
  ) {}

  async create(follow: ICreateFollowDTO) {
    return this.createFollow.execute(follow);
  }

  async delete(follow: IDeleteFollowDTO) {
    return this.deleteFollow.execute(follow);
  }

  async getFollowersOf(user: IGetFollowersDTO) {
    return this.getFollowers.execute(user);
  }

  async getFollowingOf(user: IGetFollowingDTO) {
    return this.getFollowing.execute(user);
  }
}
