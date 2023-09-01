import {
  CreateUserUseCase,
  ListAllUsersUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  SelectUserByIdUseCase,
} from './use-case';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';

export const UserFactory = {
  USE_CASE: {
    CREATE: () =>
      UserModule.get<CreateUserUseCase>(UserRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      UserModule.get<UpdateUserUseCase>(UserRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      UserModule.get<DeleteUserUseCase>(UserRegistry.USE_CASE.DELETE),
    GET: {
      ALL: () =>
        UserModule.get<ListAllUsersUseCase>(UserRegistry.USE_CASE.GET.ALL),
      BY: {
        ID: () =>
          UserModule.get<SelectUserByIdUseCase>(
            UserRegistry.USE_CASE.GET.BY.ID,
          ),
      },
    },
  },
};
