import { IUserCypher } from '@/app/modules/@core/user/cypher/user.cypher';
import { MODULE } from '@/app/modules/app.registry';
import { ICryptographer } from '@/app/modules/security/cryptography/cryptography.contract';
import { Turing } from '@/app/modules/security/cryptography/turing';
import { inject, injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    private readonly _turing: Turing | ICryptographer,
  ) {}

  hashPassword(password: string) {
    return this.turing.hash(password);
  }

  get turing() {
    return this._turing;
  }
}
