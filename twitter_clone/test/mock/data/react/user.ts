import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { User } from '@/app/modules/@core/user/entity/user.entity';

export const USER_DATA: IUserDTO = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
  id: '1234',
  bio: 'Hello World! :D',
  hasNotifications: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const USER = User.create(USER_DATA);

export const SWR_USERS = (data: IUserDTO | IUserDTO[]) => ({
  users: {
    data,
    error: null,
    mutate: () => ({}) as any,
    isLoading: false,
    isValidating: false,
  },
});

export const SWR_USER = (data: IUserDTO) => ({
  user: {
    data,
    error: null,
    mutate: () => ({}) as any,
    isLoading: false,
    isValidating: false,
  },
});

export const AUTHENTICATED_SESSION = {
  data: {
    user: {
      email: USER_DATA.email,
      name: USER_DATA.name,
      image: USER_DATA.coverImage,
    },
  },
  status: 'authenticated',
};
