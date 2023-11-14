import { Container } from 'inversify';
import { CRYPTO_MODULE } from '../../crypto/crypto.module';
//import { ARGON_MODULE } from '../../argon2/argon.module';
import { CRYPTOGRAPHY_REGISTRY } from './cryptography.registry';
import { Turing } from './turing';
import getDecorators from 'inversify-inject-decorators';
import { BCRYPT_MODULE } from '../../bcrypt/bcrypt.module';

const MODULE = new Container({ autoBindInjectable: true });

export const CRYPTOGRAPHY_MODULE = Container.merge(
  MODULE,
  CRYPTO_MODULE,
  BCRYPT_MODULE,
  //  ARGON_MODULE,
);

CRYPTOGRAPHY_MODULE.bind(CRYPTOGRAPHY_REGISTRY.TURING).to(Turing);

export const { lazyInject: injectCryptographer } =
  getDecorators(CRYPTOGRAPHY_MODULE);
