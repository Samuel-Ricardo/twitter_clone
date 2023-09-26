import { Container } from 'inversify';
import { AUTH_REGISTRY } from './auth.registry';
import { NEXT_AUTH_HANDLER, authOptions } from './next/next.auth';

export const AUTH_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

AUTH_MODULE.bind(AUTH_REGISTRY.NEXT.OPTIONS).toConstantValue(authOptions);
AUTH_MODULE.bind(AUTH_REGISTRY.NEXT.HANDLER).toConstantValue(NEXT_AUTH_HANDLER);
