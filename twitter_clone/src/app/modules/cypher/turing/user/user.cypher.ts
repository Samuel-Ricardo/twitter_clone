import { IUserCypher } from '@/app/modules/@core/user/cypher/user.cypher';
import { MODULE } from '@/app/modules/app.registry';
import { Turing } from '@/app/modules/security/cryptography/turing';
import { inject, injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    private readonly _turing: Turing,
  ) {}

  async hashPassword(password: string) {
    return await this.turing.hash(password);
  }

  async comparePassword(password: string, hash: string) {
    return await this.turing.compareHash(password, hash);
  }

  encryptIvUserId(id: string) {
    return this.turing.encryptIv(id);
  }

  get turing() {
    return this._turing;
  }
}
