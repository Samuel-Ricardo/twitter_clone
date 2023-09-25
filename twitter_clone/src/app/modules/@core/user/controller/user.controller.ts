import { inject, injectable } from 'inversify';
import { UserService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
} from '../DTO';
import { ISelectUserByCredentialsDTO } from '../DTO/select_by_credentials.dto';
import { ISelectUserByEmailDTO } from '../DTO/select_by_email.dto';

@injectable()
export class UserController {
  constructor(
    @inject(MODULE.USER.SERVICE)
    private readonly service: UserService,
  ) {}

  async create(user: ICreateUserDTO) {
    return { user: (await this.service.create(user)).toStruct() };
  }

  async delete(user: IDeleteuserDTO) {
    return this.service.delete(user);
  }

  async update(user: IUpdateUserDTO) {
    return { user: (await this.service.update(user)).toStruct() };
  }

  listAll() {
    return { users: this.service.listAll() };
  }

  selectById(user: ISelectUserByIdDTO) {
    return { user: this.service.selectById(user) };
  }

  async selectByCredentials(data: ISelectUserByCredentialsDTO) {
    const user = await this.service.selectByCredentials(data);

    return user ? { user: user.toStruct() } : null;
  }

  async selectByEmail(data: ISelectUserByEmailDTO) {
    const user = await this.service.selectByEmail(data);

    return { user: user.toStruct() };
  }
}
