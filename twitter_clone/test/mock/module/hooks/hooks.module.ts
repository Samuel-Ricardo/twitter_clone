import { Container } from 'inversify';
import { USER_HOOKS_MODULE_MOCK } from './user/user.module';

const MODULE = new Container({ autoBindInjectable: true });

export const HOOKS_MODULE_MOCK = Container.merge(
  MODULE,
  USER_HOOKS_MODULE_MOCK,
);
