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
  ICountFollowersDTO,
  ICountFollowingDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingDTO,
} from '../DTO';
import { EmitFollowUseCase } from '../use-case/observable/emit/created.use-case';
import { EmitUnfollowUseCase } from '../use-case/observable/emit/deleted.use-case';

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
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitFollow: EmitFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.EMIT.DELETED)
    private readonly emitUnfollow: EmitUnfollowUseCase,
  ) {}

  async create(follow: ICreateFollowDTO) {
    const result = await this.createFollow.execute(follow);
    result.id && this.emitFollow.executeAsync(result);
    return result;
  }

  async delete(follow: IDeleteFollowDTO) {
    await this.deleteFollow.execute(follow);
    this.emitUnfollow.executeAsync(follow);
    return true;
  }

  getFollowersOf(user: IGetFollowersDTO) {
    return this.getFollowers.execute(user);
  }

  getFollowingOf(user: IGetFollowingDTO) {
    return this.getFollowing.execute(user);
  }

  countFollowersOf(user: ICountFollowersDTO) {
    return this.countFollowers.execute(user);
  }

  countFollowingOf(user: ICountFollowingDTO) {
    return this.countFollowing.execute(user);
  }

  async getFollowersOfAsync(data: IGetFollowersDTO) {
    return await this.getFollowers.executeAsync(data);
  }
}
