import { ConfigModule } from '@/app/modules/config/config.module';
import { SOCKET_MODULE } from '@/app/modules/socket_io/socket.module';
import { Container } from 'inversify';
import { REACTIVE_SOCKET_GATEWAY_REGISTRY } from './socket.registry';
import { SocketIONotificationGateway } from './notification/notification.gateway';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

const REACTIVE_SOCKET_GATEWAY_MODULE = Container.merge(
  MODULE,
  SOCKET_MODULE,
  ConfigModule,
);

REACTIVE_SOCKET_GATEWAY_MODULE.bind(
  REACTIVE_SOCKET_GATEWAY_REGISTRY.NOTIFICATION,
)
  .to(SocketIONotificationGateway)
  .inSingletonScope();
