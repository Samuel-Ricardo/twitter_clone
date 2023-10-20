import { CRYPTOGRAPHY_MODULE } from './cryptography.module';
import { CRYPTOGRAPHY_REGISTRY } from './cryptography.registry';
import { Turing } from './turing';

export const CRYPTOGRAPHY_FACTORY = {
  TURING: () => CRYPTOGRAPHY_MODULE.get<Turing>(CRYPTOGRAPHY_REGISTRY.TURING),
};
