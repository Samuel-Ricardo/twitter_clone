import { FollowController } from '@/app/modules/@core/follow/controller';
import { ISimulatedFollowController } from '@test/@types/simulate/follow/controller';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockFollowController = () => mockDeep<FollowController>();

export const simulateFollowController = ({
  container,
}: interfaces.Context): ISimulatedFollowController => {
  const service = container.get<any>(MODULE_MOCK.FOLLOW.SERVICE.MOCK);

  return { controller: new FollowController(service), service };
};
