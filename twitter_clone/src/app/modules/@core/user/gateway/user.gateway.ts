import {
  ICreateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
} from '../DTO';
import { User } from '../entity/user.entity';
import { ISWRSupport } from './support/swr.support';

export interface IUserGateway extends ISWRSupport {
  readonly prefix: '/users';

  create(user: ICreateUserDTO): Promise<User>;
  listAll(): Promise<User[]>;
  selectById(props: ISelectUserByIdDTO): Promise<User>;
  update(props: IUpdateUserDTO): Promise<User>;
  deleteUser(props: IDeleteuserDTO): Promise<void | any>;
}
