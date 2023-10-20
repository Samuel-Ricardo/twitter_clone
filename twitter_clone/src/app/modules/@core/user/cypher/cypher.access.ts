import { inject, injectable } from 'inversify';
import { type IUserCypher } from './user.cypher';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class UserCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.TURING.USER)
    protected readonly _cypher: IUserCypher,
  ) {}
}
