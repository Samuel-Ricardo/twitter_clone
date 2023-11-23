import { IUserDTO } from '../DTO';

export interface IUserCypher {
  hashPassword(password: string): string | Promise<string>;
  comparePassword(password: string, hash: string): string | Promise<boolean>;

  encryptIvUserId(id: string): string;
  decryptIvUserId(secret: string): string;

  encryptIvUser(user: IUserDTO): string;
  decryptIvUser(user: string): IUserDTO;

  encryptIvUserList(users: IUserDTO[]): string;
  decryptIvUserList(users: string): IUserDTO[];
}
