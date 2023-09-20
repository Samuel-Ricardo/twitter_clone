import { Container } from 'inversify';
import { EVENT_MODULE } from '../../event/event.module';
import { ConfigModule as CONFIG } from '../../config/config.module';
import { NODE_OBSERVABLE_REGISTER } from './node.registry';
import { NodeObservable } from './generic/generic.observable';
import { NodeLikeObservable } from './like/like.observable';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const NODE_OBSERVABLE_MODULE = Container.merge(
  MODULE,
  EVENT_MODULE,
  CONFIG,
);

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.GENERIC)
  .to(NodeObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.LIKE)
  .to(NodeLikeObservable)
  .inSingletonScope();
