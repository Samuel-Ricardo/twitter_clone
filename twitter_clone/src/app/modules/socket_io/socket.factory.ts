import { Socket } from 'socket.io-client';
import { SOCKET_MODULE } from './socket.module';
import { SOCKET_REGISTRY } from './socket.registry';

export const SOCKET_FACTORY = {
  IO: () => SOCKET_MODULE.get<Socket>(SOCKET_REGISTRY.IO),
};
