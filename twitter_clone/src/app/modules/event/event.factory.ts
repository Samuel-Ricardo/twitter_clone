import { EventEmitter } from 'node:events';
import { EVENT_MODULE } from './event.module';
import { EVENT_REGISTRY } from './event.registry';
import EventEmitter2 from 'eventemitter2';

export const EVENT_FACTORY = {
  EMITTER: {
    NODE: () => EVENT_MODULE.get<EventEmitter>(EVENT_REGISTRY.EMITER.NODE),
    2: () => EVENT_MODULE.get<EventEmitter2>(EVENT_REGISTRY.EMITER[2]),
  },
};
