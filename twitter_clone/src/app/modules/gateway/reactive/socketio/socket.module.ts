import { Container } from 'inversify';
import { REACTIVE_SOCKET_GATEWAY_REGISTRY } from './socket.registry';
import { SocketIONotificationGateway } from './notification/notification.gateway';
import { REACTIVE_SOCKET_MODULE } from '@/app/modules/reactive/socket/socket.module';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const REACTIVE_SOCKET_GATEWAY_MODULE = Container.merge(
  MODULE,
  REACTIVE_SOCKET_MODULE,
);

REACTIVE_SOCKET_GATEWAY_MODULE.bind(
  REACTIVE_SOCKET_GATEWAY_REGISTRY.NOTIFICATION,
)
  .to(SocketIONotificationGateway)
  .inSingletonScope();
