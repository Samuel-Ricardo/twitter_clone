import { inject, injectable } from 'inversify';
import { MODULE } from '../../../app.registry';
import {
  CreateUserUseCase,
  SelectUserByIdUseCase,
  ListAllUsersUseCase,
  DeleteUserUseCase,
  UpdateUserUseCase,
} from '../use-case';
import {
  ICreateUserDTO,
  ISelectUserByIdDTO,
  IDeleteuserDTO,
  IUpdateUserDTO,
} from '../DTO';

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

  async create(user: ICreateUserDTO) {
    return await this.createUser.execute(user);
  }

  async update(user: IUpdateUserDTO) {
    return await this.updateUser.execute(user);
  }

  async delete(data: IDeleteuserDTO) {
    return await this.deleteUser.execute(data);
  }

  selectById(data: ISelectUserByIdDTO) {
    return this.selectUserById.execute(data);
  }

  listAll() {
    return this.listAllUsers.execute();
  }
}
