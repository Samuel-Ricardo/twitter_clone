import { FollowService } from '@/app/modules/@core/follow/service';
import { ISimulatedFollowService } from '@test/@types/simulate/follow/service';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockFollowService = () => mockDeep<FollowService>();

export const simulateFollowService = ({
  container,
}: interfaces.Context): ISimulatedFollowService => {
  const create = container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.CREATE);
  const deleteFollow = container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.DELETE);
  const get = {
    followers: container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.GET.FOLLOWERS),
    following: container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.GET.FOLLOWING),
  };
  const count = {
    followers: container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.COUNT.FOLLOWERS),
    following: container.get<any>(MODULE_MOCK.FOLLOW.USE_CASE.COUNT.FOLLOWING),
  };

  const service = new FollowService(
    create,
    deleteFollow,
    get.followers,
    get.following,
    count.followers,
    count.following,
  );

  return {
    service,
    use_case: {
      create,
      deleteFollow,
      get,
      count,
    },
  };
};
