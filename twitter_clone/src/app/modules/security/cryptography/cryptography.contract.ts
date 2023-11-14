//import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';

import { IAuthAlgorithmSupport } from './support/algorithm/auth.algorithm';
import { IIVAlgorithmSupport } from './support/algorithm/iv.algorithm';

export interface ICryptographer
  extends IAuthAlgorithmSupport,
    IIVAlgorithmSupport {
  hash(word: string): string | Promise<string>;
  compareHash(word: string, hash: string): boolean | Promise<boolean>;
  encryptIv(word: string): string | Promise<string>;
  decryptIv(encrypted: string): string | Promise<string>;
}
