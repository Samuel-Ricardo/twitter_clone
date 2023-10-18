import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import bcrypt from 'bcrypt';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';
import argon2 from 'argon2';

@injectable()
export class Turing implements ICryptographer {
  constructor(
    @inject(MODULE.CRYPTO)
    private readonly _crypto: typeof cryptoLib,
    @inject(MODULE.ARGON2)
    private readonly _argon: typeof argon2,
  ) {}

  get crypto() {
    return this._crypto;
  }

  get argon() {
    return this._argon;
  }

  hash(data: string) {
    return this.argon.hash(data, { type: argon2.argon2id });
  }

  compare(word: string, hash: string) {
    return this.argon.verify(word, hash, { type: argon2.argon2id });
  }
}
