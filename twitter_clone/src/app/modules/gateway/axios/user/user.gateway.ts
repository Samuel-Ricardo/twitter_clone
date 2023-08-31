import { IUserGateway } from '@/app/modules/@core/user/gateway/user.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import { ICreateUserDTO, IUserDTO } from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import { CreateUserSchema } from '@/app/modules/@core/user/validator';

@injectable()
export class AxiosUserGateway extends AxiosHTTPGateway implements IUserGateway {
  async create(user: ICreateUserDTO) {
    if (!CreateUserSchema.parse(user)) throw Error('Invalid user');

    const response = await this.post<{ user: IUserDTO }>('/users', user);
    return User.create(response.data.user);
  }

  async listAll() {
    const response = await this.get<{ users: IUserDTO[] }>('/users');
    return User.createArray(response.data.users);
  }
}
