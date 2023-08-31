import { IUserGateway } from '@/app/modules/@core/user/gateway/user.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreateUserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
  IUserDTO,
} from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import {
  CreateUserSchema,
  SelectUserByIdSchema,
  UpdateUserSchema,
} from '@/app/modules/@core/user/validator';

@injectable()
export class AxiosUserGateway extends AxiosHTTPGateway implements IUserGateway {
  readonly prefix = '/users';

  async create(user: ICreateUserDTO) {
    if (!CreateUserSchema.parse(user)) throw Error('Invalid user');

    const response = await this.post<{ user: IUserDTO }>(this.prefix, user);
    return User.create(response.data.user);
  }

  async listAll() {
    const response = await this.get<{ users: IUserDTO[] }>(this.prefix);
    return User.createArray(response.data.users);
  }

  async selectById(data: ISelectUserByIdDTO) {
    if (!SelectUserByIdSchema.parse(data)) throw Error('Invalid user');

    const response = await this.get<{ user: IUserDTO }>(
      `${this.prefix}/${data.id}`,
    );
    return User.create(response.data.user);
  }

  async update(data: IUpdateUserDTO) {
    UpdateUserSchema.parse(data);

    const response = await this.put<{ user: IUserDTO }>(this.prefix, data);
    return User.create(response.data.user);
  }
}
