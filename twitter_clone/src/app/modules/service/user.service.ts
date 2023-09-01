import { inject, injectable } from 'inversify';
import { MODULE } from '../app.registry';
import {
  CreateUserUseCase,
  SelectUserByIdUseCase,
  ListAllUsersUseCase,
  DeleteUserUseCase,
  UpdateUserUseCase,
} from '../@core/user/use-case';

@injectable()
export class UserService {
  constructor(
    @inject(MODULE.USER.USE_CASE.CREATE)
    private readonly createUser: CreateUserUseCase,
    @inject(MODULE.USER.USE_CASE.UPDATE)
    private readonly updateUser: UpdateUserUseCase,
    @inject(MODULE.USER.USE_CASE.GET.BY.ID)
    private readonly selectUserById: SelectUserByIdUseCase,
    @inject(MODULE.USER.USE_CASE.GET.ALL)
    private readonly listAllUsers: ListAllUsersUseCase,
    @inject(MODULE.USER.USE_CASE.DELETE)
    private readonly deleteUser: DeleteUserUseCase,
  ) {}
}
