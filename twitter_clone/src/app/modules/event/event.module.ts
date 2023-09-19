import { Container } from 'inversify';
import { EVENT_REGISTRY } from './event.registry';
import { EventEmitter } from 'node:stream';
import { EventEmitter2 } from 'eventemitter2';

export const EVENT_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

EVENT_MODULE.bind(EVENT_REGISTRY.EMMITER.NODE).toConstantValue(EventEmitter);

EVENT_MODULE.bind(EVENT_REGISTRY.EMMITER[2]).toConstantValue(EventEmitter2);
