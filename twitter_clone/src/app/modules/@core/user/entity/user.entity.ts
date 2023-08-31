import { injectable } from 'inversify';
import { IUserDTO } from '../DTO/user.dto';
import { UserSchema } from '../validator';

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
  ) {
    User.validate({
      id: _id,
      name: _name,
      username: _username,
      email: _email,
      password: _password,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      hasNotifications: _hasNotifications,
      sessionToken: _sessionToken,
      bio: _bio,
      emailVerified: _emailVerified,
      image: _image,
      coverImage: _coverImage,
      profileImage: _profileImage,
    });
  }

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

  static validate(user: IUserDTO) {
    return UserSchema.parse(user);
  }

  toStruct(): IUserDTO {
    return {
      id: this._id,
      name: this._name,
      username: this._username,
      email: this._email,
      password: this._password,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      hasNotifications: this._hasNotifications,
      sessionToken: this._sessionToken,
      bio: this._bio,
      emailVerified: this._emailVerified,
      image: this._image,
      coverImage: this._coverImage,
      profileImage: this._profileImage,
    };
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
