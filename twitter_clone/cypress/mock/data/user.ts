import { randomID } from '../../util/mongo';

export const CREATE_USER_DATA = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
};

export const VALID_USER_DATA = {
  ...CREATE_USER_DATA,
  id: randomID(),
  bio: 'Hello World! :D',
  hasNotifications: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const UPDATE_USER_DATA = {
  id: VALID_USER_DATA.id,
  bio: 'Updated BIO',
};

export const SWR_USER = (data: any) => ({
  data,
  error: null,
  mutate: () => ({}) as any,
  isLoading: false,
  isValidating: false,
});
