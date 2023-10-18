import { BCRYPT_MODULE } from './bcrypt.module';
import bcrypt from 'bcrypt';
import { BCRYPT_REGISTRY } from './bcrypt.registry';

export const BCRYPT_FACTORY = {
  BCRYPT: () => BCRYPT_MODULE.get<typeof bcrypt>(BCRYPT_REGISTRY.BCRYPT),
};
