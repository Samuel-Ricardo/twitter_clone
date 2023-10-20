import { IUserDTO } from '../DTO';

export interface IUserCypher {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;

  encryptUserId(id: string): Promise<string>;
  decryptUserId(id: string): Promise<string>;

  encryptUser(user: IUserDTO): Promise<IUserDTO>;
  decryptUser(user: IUserDTO): Promise<IUserDTO>;
}
