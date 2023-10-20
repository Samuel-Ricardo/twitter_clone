import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';
import { IUserDTO } from '../DTO';

export interface IUserCypher {
  hashPassword(password: string): string | Promise<string>;
  comparePassword(password: string, hash: string): string | Promise<boolean>;

  encryptIvUserId(id: string): IEncriptedIv | Promise<IEncriptedIv>;
  decryptIvUserId(secret: IEncriptedIv): string | Promise<string>;

  encryptIvUser(user: IUserDTO): IEncriptedIv | Promise<IEncriptedIv>;
  decryptIvUser(user: IEncriptedIv): IUserDTO | Promise<IUserDTO>;
}
