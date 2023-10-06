import { Container } from 'inversify';
import { NODE_OBSERVABLE_MODULE } from './node/node.module';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const OBSERVABLE_MODULE = Container.merge(
  MODULE,
  NODE_OBSERVABLE_MODULE,
);
