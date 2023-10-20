import { CYPHER_TURING_MODULE } from './turing.module';
import { CYPHER_TURING_REGISTRY } from './turing.registry';
import { TuringUserCypher } from './user/user.cypher';

export const CYPHER_TURING_FACTORY = {
  USER: () =>
    CYPHER_TURING_MODULE.get<TuringUserCypher>(CYPHER_TURING_REGISTRY.USER),
};
