import { Container } from 'inversify';
import { REACTIVE_SOCKET_GATEWAY_MODULE as SOCKET_IO } from './socketio/socket.module';

const MODULE = new Container({ autoBindInjectable: true });

export const REACTIVE_GATEWAY_MODULE = Container.merge(MODULE, SOCKET_IO);
