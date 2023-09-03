import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUserDTO,
} from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import { randomID } from '../../util/mongo';

export const CREATE_USER_DATA: ICreateUserDTO = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
};

export const VALID_USER_DATA: IUserDTO = {
  ...CREATE_USER_DATA,
  id: randomID(),
  bio: 'Hello World! :D',
  hasNotifications: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_USER = User.create(VALID_USER_DATA);

export const generateValidUser = () =>
  User.create({
    id: randomID(),
    name: 'Pedro ' + randomID(),
    username: 'pedro ' + randomID(),
    bio: randomID(),
    email: `pedro${randomID()}@email.com`,
    password: randomID(),
    hasNotifications: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
