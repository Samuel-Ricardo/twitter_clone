import argon2 from 'argon2-browser';
import { ARGON_MODULE } from './argon.module';
import { ARGON_REGISTRY } from './argon.registry';

export const ARGON_FACTORY = {
  ARGON2: () => ARGON_MODULE.get<typeof argon2>(ARGON_REGISTRY.ARGON2),
};
