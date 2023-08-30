import { injectable } from 'inversify';
import { IUserDTO } from '../DTO/user.dto';

@injectable()
export class User {
  constructor(
    private _id: string,
    private _name: string,
    private _username: string,
    private _email: string,
    private _password: string,

    private _createdAt: Date,
    private _updatedAt: Date,
    private _hasNotifications: boolean,

    private sessionToken?: string | null,
    private bio?: string | null,
    private emailVerified?: Date | null,
    private image?: string | null,
    private coverImage?: string | null,
    private profileImage?: string | null,
  ) {}

  static create(data: IUserDTO): User {
    return new User(
      data.id,
      data.name,
      data.username,
      data.email,
      data.password,
      data.createdAt,
      data.updatedAt,
      data.hasNotifications,
      data.sessionToken,
      data.bio,
      data.emailVerified,
      data.image,
      data.coverImage,
      data.profileImage,
    );
  }
}
