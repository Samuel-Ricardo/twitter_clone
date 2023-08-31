import {
  ICreateUserDTO,
  IDeleteuserDTO,
  ISelectUserByIdDTO,
  IUpdateUserDTO,
} from '../DTO';
import { User } from '../entity/user.entity';

export interface IUserGateway {
  create(user: ICreateUserDTO): Promise<User>;
  listAll(): Promise<User[]>;
  selectById(props: ISelectUserByIdDTO): Promise<User>;
  update(props: IUpdateUserDTO): Promise<User>;
  delete(props: IDeleteuserDTO): Promise<boolean>;
}
