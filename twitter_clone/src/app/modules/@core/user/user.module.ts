import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import { UserRegistry } from './user.registry';
import {
  CreateUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  SelectUserByIdUseCase,
  ListAllUsersUseCase,
} from './use-case';

const Modue = new Container({ autoBindInjectable: true });

export const UserModule = Container.merge(Modue, GatewayModule);

UserModule.bind(UserRegistry.USE_CASE.CREATE).to(CreateUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.UPDATE).to(UpdateUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.DELETE).to(DeleteUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.GET.ALL).to(ListAllUsersUseCase);
UserModule.bind(UserRegistry.USE_CASE.GET.BY.ID).to(SelectUserByIdUseCase);