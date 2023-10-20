import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';
import argon2 from 'argon2';
import { injectConfig } from '../../config/config.module';

@injectable()
export class Turing implements ICryptographer {
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[256].GCM)
  private readonly _algorithm: string;
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.IV)
  private readonly _iv: string;
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

  encrypt(word: string) {
    return this.cypheriv.update(word, 'utf8', 'hex');
  }

  decrypt(word: string) {
    return this.cypheriv.update(word, 'hex', 'utf8');
  }

  get cypheriv() {
    const { algorithm, key, iv } = this;
    return this.crypto.createCipheriv(algorithm, key, iv);
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
    return this._iv;
  }

  get key() {
    return this._key;
  }
}
