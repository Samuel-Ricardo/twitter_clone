import { UserService } from '@/app/modules/@core/user/service';
import { ISimulatedUserService } from '@test/@types/simulate';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';
import { USER_REGISTRY_MOCK } from '../user.registry';

export const mockUserService = () => mockDeep<UserService>();

export const simulateUserService = ({
  container,
}: interfaces.Context): ISimulatedUserService => {
  const create = container.get<any>(USER_REGISTRY_MOCK.USE_CASE.CREATE);
  const update = container.get<any>(USER_REGISTRY_MOCK.USE_CASE.UPDATE);
  const delete_user = container.get<any>(USER_REGISTRY_MOCK.USE_CASE.DELETE);
  const all = container.get<any>(USER_REGISTRY_MOCK.USE_CASE.GET.ALL);
  const id = container.get<any>(USER_REGISTRY_MOCK.USE_CASE.GET.BY.ID);

  const service = new UserService(create, update, id, all, delete_user);

  return {
    service: service,
    use_case: {
      create: create,
      update: update,
      delete: delete_user,
      get: {
        all: all,
        by: { id },
      },
    },
  };
};
