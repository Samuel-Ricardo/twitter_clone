import { UserService } from '@/app/modules/@core/user/service';
import {
  CreateUserUseCase,
  SelectUserByIdUseCase,
  ListAllUsersUseCase,
  DeleteUserUseCase,
  UpdateUserUseCase,
} from '@/app/modules/@core/user/use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedUserService {
  servcie: UserService;
  use_case: {
    create: DeepMockProxy<CreateUserUseCase>;
    update: DeepMockProxy<UpdateUserUseCase>;
    delete: DeepMockProxy<DeleteUserUseCase>;
    get: {
      all: DeepMockProxy<ListAllUsersUseCase>;
      by: {
        id: DeepMockProxy<SelectUserByIdUseCase>;
      };
    };
  };
}
