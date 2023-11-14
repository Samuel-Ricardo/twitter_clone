import { UserCypherAccess } from '../../../cypher/cypher.access';

export class DecryptCreateUserDataPolicy extends UserCypherAccess {
  execute(user: string) {
    return this._cypher.decryptIvCreateDTO(user);
  }
}
