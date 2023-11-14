import { inject, injectable } from 'inversify';
import cryptoLib from 'crypto';
import { ICryptographer } from './cryptography.contract';
import { MODULE } from '../../app.registry';
import bcrypt from 'bcryptjs';
import { injectConfig } from '../../config/config.module';

@injectable()
export class Turing implements ICryptographer {
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[256].GCM)
  private readonly _algorithm: string;
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.KEY)
  private readonly _key: string;

  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.BREAKER)
  private readonly _breaker: string;
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.AUTH.BREAKER)
  private readonly _authBreaker: string;
  @injectConfig(MODULE.CONFIG.SECURITY.CYPHER.IV.BREAKER)
  private readonly _ivBreaker: string;

  constructor(
    @inject(MODULE.CRYPTO)
    private readonly _crypto: typeof cryptoLib,
    @inject(MODULE.BCRYPT)
    private readonly _hasher: typeof bcrypt,
  ) {}
}
