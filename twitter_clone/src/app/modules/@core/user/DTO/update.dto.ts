export interface IUpdateUserDTO {
  id: string;
  name?: string;
  username?: string;
  bio?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  sessionToken?: string;
  hasNotifications?: boolean;
  emailVerified?: Date;
  image?: string;
  coverImage?: string;
  profileImage?: string;
}
