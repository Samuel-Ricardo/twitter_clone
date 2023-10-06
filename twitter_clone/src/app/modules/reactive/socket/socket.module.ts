import { Container } from 'inversify';
import { SocketIO } from './io';
import { REACTIVE_SOCKET_REGISTRY } from './socket.registry';
import { SOCKET_MODULE } from '../../socket_io/socket.module';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const REACTIVE_SOCKET_MODULE = Container.merge(MODULE, SOCKET_MODULE);

REACTIVE_SOCKET_MODULE.bind(REACTIVE_SOCKET_REGISTRY.IO).to(SocketIO);
