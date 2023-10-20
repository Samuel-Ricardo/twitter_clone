import { Container } from 'inversify';
import { SECURITY_MODULE } from '../../security/security.module';
import { CYPHER_TURING_REGISTRY } from './turing.registry';
import { TuringUserCypher } from './user/user.cypher';
import getDecorators from 'inversify-inject-decorators';

const MODULE = new Container({ autoBindInjectable: true });

export const CYPHER_TURING_MODULE = Container.merge(MODULE, SECURITY_MODULE);

CYPHER_TURING_MODULE.bind(CYPHER_TURING_REGISTRY.USER).to(TuringUserCypher);

export const { lazyInject: injectTuring } = getDecorators(CYPHER_TURING_MODULE);
