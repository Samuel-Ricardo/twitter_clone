import { IUserDTO } from '../../../DTO';
import { UserCypherAccess } from '../../../cypher/cypher.access';

export class EncryptUserDataPolicy extends UserCypherAccess {
  execute(user: IUserDTO) {
    return this._cypher.encryptIvUser(user);
  }
}
