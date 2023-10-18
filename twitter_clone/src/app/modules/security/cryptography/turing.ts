import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';

@injectable()
export class Turing implements ICryptographer {
  constructor(
    @inject(MODULE.CRYPTO)
    private readonly _crypto: typeof cryptoLib,
  ) {}

  get crypto() {
    return this._crypto;
  }
}
