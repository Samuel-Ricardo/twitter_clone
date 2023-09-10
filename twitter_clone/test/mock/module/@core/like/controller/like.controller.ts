import { LikeController } from '@/app/modules/@core/like/controller';
import { ISimulatedLikeController } from '@test/@types/simulate/like/controller';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockLikeController = () => mockDeep<LikeController>();

export const simulateLikeController = ({
  container,
}: interfaces.Context): ISimulatedLikeController => {
  const service = container.get<any>(MODULE_MOCK.LIKE.SERVICE.MOCK);
  const controller = new LikeController(service);

  return { controller, service };
};
