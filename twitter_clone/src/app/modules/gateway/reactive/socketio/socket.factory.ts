import { SocketIONotificationGateway } from './notification/notification.gateway';
import { REACTIVE_SOCKET_GATEWAY_MODULE } from './socket.module';
import { REACTIVE_SOCKET_GATEWAY_REGISTRY } from './socket.registry';

export const REACTIVE_SOCKET_GATEWAY_FACTORY = {
  NOTIFICATION: () =>
    REACTIVE_SOCKET_GATEWAY_MODULE.get<SocketIONotificationGateway>(
      REACTIVE_SOCKET_GATEWAY_REGISTRY.NOTIFICATION,
    ),
};
