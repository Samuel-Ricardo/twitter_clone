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

  async hash(data: string) {
    return await this.hasher.hash(data, 32);
  }

  async compareHash(word: string, hash: string) {
    return await this.hasher.compare(word, hash);
  }

  encryptIv(word: string): string {
    const { cipher, iv } = this.cipheriv();

    let result = cipher.update(word, 'utf8', 'hex');
    result += cipher.final('hex');
    result += this._breaker;

    const authTag = cipher.getAuthTag();

    result = this.injectAuthTag(result, authTag);
    result = this.injectIV(result, iv);

    return result;
  }

  decryptIv(encrypted: string): string {
    const { decipher, secret } = this.decipheriv(encrypted);

    let result = decipher.update(secret, 'hex', 'utf8');
    result += decipher.final('utf8');

    return result;
  }

  cipheriv() {
    const iv = this.iv;

    return {
      cipher: this.crypto.createCipheriv(
        this.algorithm,
        this.key,
        iv,
      ) as cryptoLib.CipherGCM,
      iv,
    };
  }

  decipheriv(encrypted: string) {
    const iv = this.extractIV(encrypted);
    const authTag = this.getAuthTag(encrypted);
    const secret = this.extractSecret(encrypted);

    const decipher = this.crypto.createDecipheriv(
      this.algorithm,
      this.key,
      iv,
    ) as cryptoLib.DecipherGCM;

    decipher.setAuthTag(authTag);

    return { decipher, iv, authTag, secret };
  }

  injectAuthTag(secret: string, authTag: Buffer) {
    return Turing.setDataInSecret(
      secret,
      authTag.toString('hex'),
      this._authBreaker,
    );
  }

  injectIV(secret: string, iv: Buffer) {
    return Turing.setDataInSecret(secret, iv.toString('hex'), this._ivBreaker);
  }

  extractIV(secret: string) {
    return Buffer.from(
      Turing.getDataFromSecret(secret, this._ivBreaker),
      'hex',
    );
  }

  getAuthTag(secret: string) {
    return Buffer.from(
      Turing.getDataFromSecret(secret, this._authBreaker),
      'hex',
    );
  }

  extractSecret(data: string) {
    return data.split(this._breaker)[0];
  }

  static setDataInSecret(secret: string, data: string, breaker: string) {
    return secret.concat(breaker, data, breaker);
  }

  static getDataFromSecret(secret: string, breaker: string) {
    return secret.split(breaker)[1];
  }

  protected get crypto() {
    return this._crypto;
  }

  protected get hasher() {
    return this._hasher;
  }

  protected get algorithm() {
    return this._algorithm;
  }

  protected get iv() {
    return this.crypto.randomBytes(32);
  }

  protected get key() {
    return this._key;
  }
}
