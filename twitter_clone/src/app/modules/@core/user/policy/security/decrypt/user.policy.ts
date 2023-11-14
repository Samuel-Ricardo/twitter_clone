import { UserCypherAccess } from '../../../cypher/cypher.access';

export class DecryptUserDataPolicy extends UserCypherAccess {
  execute(user: string) {
    return this._cypher.decryptIvUser(user);
  }
}
