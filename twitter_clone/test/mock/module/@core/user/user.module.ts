import { Container } from 'inversify';
import { USER_REGISTRY_MOCK } from './user.registry';
import {
  mockCreatUserUseCase,
  mockDeletUserUseCase,
  mockUpdateUserUseCase,
  mockListAllUsersUseCase,
  mockSelectUserByIdUseCase,
} from './use-case';
import { mockUserService, simulateUserService } from './service';

const MODULE = new Container();

export const USER_MODULE_MOCK = MODULE;

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.USE_CASE.CREATE).toDynamicValue(
  mockCreatUserUseCase,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.USE_CASE.UPDATE).toDynamicValue(
  mockUpdateUserUseCase,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.USE_CASE.DELETE).toDynamicValue(
  mockDeletUserUseCase,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.USE_CASE.GET.ALL).toDynamicValue(
  mockListAllUsersUseCase,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.USE_CASE.GET.BY.ID).toDynamicValue(
  mockSelectUserByIdUseCase,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.SERVICE.MOCK).toDynamicValue(
  mockUserService,
);

USER_MODULE_MOCK.bind(USER_REGISTRY_MOCK.SERVICE.SIMULATE).toDynamicValue(
  simulateUserService,
);
