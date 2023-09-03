import { UserController } from '@/app/modules/@core/user/controller';
import { ISimulatedUserController } from '@test/@types/simulate/user/controller';
import { mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { USER_REGISTRY_MOCK } from '../user.registry';

export const mockUserController = () => mockDeep<UserController>();

export const simulateUserController = ({
  container,
}: interfaces.Context): ISimulatedUserController => {
  const service = container.get<any>(USER_REGISTRY_MOCK.SERVICE.MOCK);
  const controller = new UserController(service);

  return {
    controller,
    service,
  };
};
