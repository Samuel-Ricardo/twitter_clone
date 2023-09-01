import { inject, injectable } from 'inversify';
import { UserService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
} from '../DTO';

@injectable()
export class userController {
  constructor(
    @inject(MODULE.USER.SERVICE)
    private readonly service: UserService,
  ) {}

  async create(user: ICreateUserDTO) {
    return this.service.create(user);
  }

  async delete(user: IDeleteuserDTO) {
    return this.service.delete(user);
  }

  async update(user: IUpdateUserDTO) {
    return this.service.update(user);
  }

  async listAll() {
    return this.service.listAll();
  }

  async selectById(user: ISelectUserByIdDTO) {
    return this.service.selectById(user);
  }
}
