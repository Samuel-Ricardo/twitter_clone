import { IUserDTO } from '../modules/@core/user/DTO';

export class GlobalUser {
  private static _globalUser: IUserDTO | undefined = undefined;

  static get user(): IUserDTO | undefined {
    console.log({ GLOBAL_GET: this._globalUser });
    return this._globalUser;
  }

  static set user(data: IUserDTO | undefined) {
    this._globalUser = data;
    console.log({ GLOBAL_SET: this._globalUser });
  }
}
