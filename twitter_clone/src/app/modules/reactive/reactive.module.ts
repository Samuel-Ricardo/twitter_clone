import { Container } from 'inversify';
import { REACTIVE_SOCKET_MODULE } from './socket/socket.module';

const MODULE = new Container({ autoBindInjectable: true });

export const REACTIVE_MODULE = Container.merge(MODULE, REACTIVE_SOCKET_MODULE);
