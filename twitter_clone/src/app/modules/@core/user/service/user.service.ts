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
import { ISelectUserByCredentialsDTO } from '../DTO/select_by_credentials.dto';
import { SelectUserByCredentialsUseCase } from '../use-case/select_by_credentials.use-case';
import { SelectUserByEmailUseCase } from '../use-case/select_by_email.use-case';
import { ISelectUserByEmailDTO } from '../DTO/select_by_email.dto';
import {
  CreateUserSchema,
  DeleteUserScheme,
  SelectUserByIdSchema,
  UpdateUserSchema,
} from '@/app/modules/@core/user/validator';

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
    @inject(MODULE.USER.USE_CASE.GET.BY.CREDENTIALS)
    private readonly selectUserByCredentials: SelectUserByCredentialsUseCase,
    @inject(MODULE.USER.USE_CASE.GET.BY.EMAIL)
    private readonly selectUserByEmail: SelectUserByEmailUseCase,
  ) {}

  async create(user: ICreateUserDTO) {
    CreateUserSchema.parse(user);
    return await this.createUser.execute(user);
  }

  async update(user: IUpdateUserDTO) {
    UpdateUserSchema.parse(user);
    return await this.updateUser.execute(user);
  }

  async delete(data: IDeleteuserDTO) {
    DeleteUserScheme.parse(data);
    return await this.deleteUser.execute(data);
  }

  async selectByCredentials(data: ISelectUserByCredentialsDTO) {
    return await this.selectUserByCredentials.execute(data);
  }

  selectByEmail(data: ISelectUserByEmailDTO) {
    return this.selectUserByEmail.execute(data);
  }

  selectById(data: ISelectUserByIdDTO) {
    return this.selectUserById.execute(data);
  }

  listAll() {
    return this.listAllUsers.execute();
  }

  async selectAsyncById(user: ISelectUserByIdDTO) {
    return await this.selectUserById.executeAsync(user);
  }
}
