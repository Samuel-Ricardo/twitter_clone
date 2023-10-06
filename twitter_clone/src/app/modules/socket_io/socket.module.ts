import { Container } from 'inversify';
import { SOCKET_REGISTRY } from './socket.registry';
import { socketIO } from './socket.io';

export const SOCKET_MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

SOCKET_MODULE.bind(SOCKET_REGISTRY.IO).toConstantValue(socketIO);
