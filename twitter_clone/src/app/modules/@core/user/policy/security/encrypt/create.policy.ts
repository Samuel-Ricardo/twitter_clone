import { ICreateUserDTO } from '../../../DTO';
import { UserCypherAccess } from '../../../cypher/cypher.access';

export class EncryptCreateUserDataPolicy extends UserCypherAccess {
  execute(user: ICreateUserDTO) {
    return this._cypher.encryptIvCreateDTO(user);
  }
}
