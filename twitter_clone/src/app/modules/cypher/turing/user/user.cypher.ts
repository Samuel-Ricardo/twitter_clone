import { IUserCypher } from '@/app/modules/@core/user/cypher/user.cypher';
import { ICryptographer } from '@/app/modules/security/cryptography/cryptography.contract';
import { Turing } from '@/app/modules/security/cryptography/turing';
import { injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(private readonly _turing: Turing | ICryptographer) {}

  get turing() {
    return this._turing;
  }
}
