import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import bcrypt from 'bcrypt';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';

@injectable()
export class Turing implements ICryptographer {
  constructor(
    @inject(MODULE.CRYPTO)
    private readonly _crypto: typeof cryptoLib,
    @inject(MODULE.BCRYPT)
    private readonly _bcrypt: typeof bcrypt,
  ) {}

  get crypto() {
    return this._crypto;
  }

  get bcrypt() {
    return this._bcrypt;
  }

  hash(data: string) {
    return this.bcrypt.hashSync(data, 32);
  }

  compare(word: string, hash: string) {
    return this.bcrypt.compareSync(word, hash);
  }
}
