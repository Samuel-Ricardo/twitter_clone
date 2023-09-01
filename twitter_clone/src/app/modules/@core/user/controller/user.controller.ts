import { inject, injectable } from 'inversify';
import { UserService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import { ICreateUserDTO } from '../DTO';

@injectable()
export class userController {
  constructor(
    @inject(MODULE.USER.SERVICE)
    private readonly service: UserService,
  ) {}

  async create(user: ICreateUserDTO) {
    return this.service.create(user);
  }

  async listAll() {
    return this.service.listAll();
  }
}
