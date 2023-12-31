import { Container } from 'inversify';
import { EVENT_REGISTRY } from './event.registry';
import { EventEmitter } from 'events';
import { EventEmitter2 } from 'eventemitter2';

export const EVENT_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

EVENT_MODULE.bind(EVENT_REGISTRY.EMITER.NODE).toConstantValue(
  new EventEmitter(),
);

EVENT_MODULE.bind(EVENT_REGISTRY.EMITER[2]).toConstantValue(
  new EventEmitter2(),
);
