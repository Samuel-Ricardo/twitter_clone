import { Container } from 'inversify';
import argon2 from 'argon2';
import { ARGON_REGISTRY } from './argon.registry';
import getDecorators from 'inversify-inject-decorators';

export const ARGON_MODULE = new Container({ autoBindInjectable: true });

ARGON_MODULE.bind(ARGON_REGISTRY.ARGON2).toConstantValue(argon2);

export const { lazyInject: argonInject } = getDecorators(ARGON_MODULE);
