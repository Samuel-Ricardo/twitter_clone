import { Container } from 'inversify';
import { AUTH_REGISTRY } from './auth.registry';
import { authOptions } from './next/next.auth';
import { UserModule } from '../@core/user/user.module';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const AUTH_MODULE = Container.merge(MODULE, UserModule);

AUTH_MODULE.bind(AUTH_REGISTRY.NEXT.OPTIONS)
  .toDynamicValue(authOptions)
  .inSingletonScope();
//AUTH_MODULE.bind(AUTH_REGISTRY.NEXT.HANDLER).toConstantValue(NEXT_AUTH_HANDLER);
