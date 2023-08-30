import { injectable } from 'inversify';

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
}
