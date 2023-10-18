import { Container } from 'inversify';
import { BCRYPT_REGISTRY } from './bcrypt.registry';
import bcrypt from 'bcrypt';
import getDecorators from 'inversify-inject-decorators';

export const BCRYPT_MODULE = new Container({ autoBindInjectable: true });

BCRYPT_MODULE.bind(BCRYPT_REGISTRY.BCRYPT).toConstantValue(bcrypt);

export const { lazyInject: bcryptInject } = getDecorators(BCRYPT_MODULE);
