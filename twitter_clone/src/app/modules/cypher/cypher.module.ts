import { Container } from 'inversify';
import { CYPHER_TURING_MODULE } from './turing/turing.module';
import getDecorators from 'inversify-inject-decorators';

const MODULE = new Container({ autoBindInjectable: true });

export const CYPHER_MODULE = Container.merge(MODULE, CYPHER_TURING_MODULE);

export const { lazyInject: injectCypher } = getDecorators(CYPHER_MODULE);
