import { DeepMockProxy } from 'jest-mock-extended';
import { USER_MODULE_MOCK } from './user.module';
import {
  CreateUserUseCase,
  SelectUserByIdUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  ListAllUsersUseCase,
} from '@/app/modules/@core/user/use-case';
import { USER_REGISTRY_MOCK } from './user.registry';
import { UserService } from '@/app/modules/@core/user/service';
import { ISimulatedUserService } from '@test/@types';

export const USER_FACTORY_MOCK = {
  SERVICE: {
    MOCK: USER_MODULE_MOCK.get<DeepMockProxy<UserService>>(
      USER_REGISTRY_MOCK.SERVICE.MOCK,
    ),
    SIMULATE: USER_MODULE_MOCK.get<ISimulatedUserService>(
      USER_REGISTRY_MOCK.SERVICE.SIMULATE,
    ),
  },
  USE_CASE: {
    CREATE: () =>
      USER_MODULE_MOCK.get<DeepMockProxy<CreateUserUseCase>>(
        USER_REGISTRY_MOCK.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      USER_MODULE_MOCK.get<DeepMockProxy<UpdateUserUseCase>>(
        USER_REGISTRY_MOCK.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      USER_MODULE_MOCK.get<DeepMockProxy<DeleteUserUseCase>>(
        USER_REGISTRY_MOCK.USE_CASE.DELETE,
      ),
    GET: {
      ALL: () =>
        USER_MODULE_MOCK.get<DeepMockProxy<ListAllUsersUseCase>>(
          USER_REGISTRY_MOCK.USE_CASE.GET.ALL,
        ),
      BY: {
        ID: () =>
          USER_MODULE_MOCK.get<DeepMockProxy<SelectUserByIdUseCase>>(
            USER_REGISTRY_MOCK.USE_CASE.GET.BY.ID,
          ),
      },
    },
  },
};
