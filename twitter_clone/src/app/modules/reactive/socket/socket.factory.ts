import { SocketIO } from './io';
import { REACTIVE_SOCKET_MODULE } from './socket.module';
import { REACTIVE_SOCKET_REGISTRY } from './socket.registry';

export const REACTIVE_SOCKET_FACTORY = {
  IO: () => REACTIVE_SOCKET_MODULE.get<SocketIO>(REACTIVE_SOCKET_REGISTRY.IO),
};
