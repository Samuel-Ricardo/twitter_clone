import { inject, injectable } from 'inversify';
import { UserService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
} from '../DTO';

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
}
