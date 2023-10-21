import { UserController } from './controller';
import { USER_POLICY_FACTORY } from './policy/policy.factory';
import { UserService } from './service';
import {
  CreateUserUseCase,
  ListAllUsersUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  SelectUserByIdUseCase,
} from './use-case';
import { SelectUserByCredentialsUseCase } from './use-case/select_by_credentials.use-case';
import { SelectUserByEmailUseCase } from './use-case/select_by_email.use-case';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';

export const UserFactory = {
  MAIN: () => UserModule.get<UserController>(UserRegistry.MAIN),
  CONTROLLER: () => UserModule.get<UserController>(UserRegistry.CONTROLLER),
  SERVICE: () => UserModule.get<UserService>(UserRegistry.SERVICE),
  POLICY: USER_POLICY_FACTORY,
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
        CREDENTIALS: () =>
          UserModule.get<SelectUserByCredentialsUseCase>(
            UserRegistry.USE_CASE.GET.BY.CREDENTIALS,
          ),
        EMAIL: () =>
          UserModule.get<SelectUserByEmailUseCase>(
            UserRegistry.USE_CASE.GET.BY.EMAIL,
          ),
      },
    },
  },
};
