import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';

export interface ICryptographer {
  hash(word: string): string | Promise<string>;
  compareHash(word: string, hash: string): boolean | Promise<boolean>;
  encryptIv(word: string): IEncriptedIv | Promise<IEncriptedIv>;
  decryptIv(word: IEncriptedIv): string | Promise<string>;
}
