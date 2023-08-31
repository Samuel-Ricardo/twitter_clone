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

    private _sessionToken?: string | null,
    private _bio?: string | null,
    private _emailVerified?: Date | null,
    private _image?: string | null,
    private _coverImage?: string | null,
    private _profileImage?: string | null,
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

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get hasNotifications(): boolean {
    return this._hasNotifications;
  }

  get sessionToken(): string | null | undefined {
    return this._sessionToken;
  }

  get bio(): string | null | undefined {
    return this._bio;
  }

  get emailVerified(): Date | null | undefined {
    return this._emailVerified;
  }

  get image(): string | null | undefined {
    return this._image;
  }

  get coverImage(): string | null | undefined {
    return this._coverImage;
  }

  get profileImage(): string | null | undefined {
    return this._profileImage;
  }
}
