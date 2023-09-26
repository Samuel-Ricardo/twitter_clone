import { AuthOptions } from 'next-auth';
import { AUTH_MODULE } from './auth.module';
import { AUTH_REGISTRY } from './auth.registry';
import NextAuth from 'next-auth';

export const AUTH_FACTORY = {
  NEXT: {
    OPTIONS: () => AUTH_MODULE.get<AuthOptions>(AUTH_REGISTRY.NEXT.OPTIONS),
    HANDLER: () => AUTH_MODULE.get<typeof NextAuth>(AUTH_REGISTRY.NEXT.HANDLER),
  },
};
