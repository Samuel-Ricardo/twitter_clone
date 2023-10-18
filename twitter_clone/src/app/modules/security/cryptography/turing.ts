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

  async hash(data: string): Promise<string> {
    return this._crypto.createHash('sha256').update(data).digest('hex');
  }
}
