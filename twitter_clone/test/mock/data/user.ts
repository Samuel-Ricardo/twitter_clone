import { ICreateUserDTO, IUpdateUserDTO } from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';

export const CREATE_USER_DATA: ICreateUserDTO = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
};

export const VALID_USER_DATA: IUpdateUserDTO = {
  ...CREATE_USER_DATA,
  id: randomID(),
  bio: 'Hello World! :D',
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
    createdAt: new Date(),
    updatedAt: new Date(),
  });
