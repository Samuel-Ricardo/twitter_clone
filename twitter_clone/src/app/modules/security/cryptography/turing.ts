import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';
import argon2 from 'argon2';
import { injectConfig } from '../../config/config.module';
import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';

@injectable()
export class Turing implements ICryptographer {
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[256].GCM)
  private readonly _algorithm: string;
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.KEY)
  private readonly _key: string;

  constructor(
    @inject(MODULE.CRYPTO)
    private readonly _crypto: typeof cryptoLib,
    @inject(MODULE.ARGON2)
    private readonly _argon: typeof argon2,
  ) {}

  hash(data: string) {
    return this.argon.hash(data, { type: argon2.argon2id });
  }

  compare(word: string, hash: string) {
    return this.argon.verify(word, hash, { type: argon2.argon2id });
  }

  encryptiv(word: string): IEncriptedIv {
    const { cipher, iv } = this.cipheriv();

    let result = cipher.update(word, 'utf8', 'hex');
    result += cipher.final('hex');

    return { data: result, iv };
  }

  decryptiv(secret: IEncriptedIv): string {
    const decipher = this.decipheriv(secret.iv);

    let result = decipher.update(secret.data, 'hex', 'utf8');
    result += decipher.final('utf8');

    return result;
  }

  cipheriv() {
    const iv = this.iv;
    return {
      cipher: this.crypto.createCipheriv(this.algorithm, this.key, iv),
      iv,
    };
  }

  decipheriv(iv: string | Buffer) {
    return this.crypto.createDecipheriv(this.algorithm, this.key, iv);
  }

  get crypto() {
    return this._crypto;
  }

  get argon() {
    return this._argon;
  }

  get algorithm() {
    return this._algorithm;
  }

  get iv() {
    return this.crypto.randomBytes(32);
  }

  get key() {
    return this._key;
  }
}
