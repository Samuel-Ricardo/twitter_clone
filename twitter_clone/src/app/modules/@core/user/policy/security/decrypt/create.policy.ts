import { IEncriptedIv } from '@/app/@types/security/cryptographer/encriptedIv';
import { UserCypherAccess } from '../../../cypher/cypher.access';

export class DecryptUserDataPolicy extends UserCypherAccess {
  execute(user: IEncriptedIv) {
    return this._cypher.decryptIvCreateDTO(user);
  }
}
