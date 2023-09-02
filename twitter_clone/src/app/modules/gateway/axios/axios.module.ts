import { Container } from 'inversify';
import { AxiosModule } from '../../axios/axios.module';
import { AxiosGatewayRegistry } from './axios.registry';
import { AxiosHTTPGateway } from './generic/http.gateway';
import { AxiosUserGateway } from './user/user.gateway';
import { ConfigModule } from '../../config/config.module';

const Module = new Container({ autoBindInjectable: true });

export const AxiosGatewayModule = Container.merge(
  Module,
  AxiosModule,
  ConfigModule,
);

AxiosGatewayModule.bind(AxiosGatewayRegistry.GENERIC.HTTP).to(AxiosHTTPGateway);
AxiosGatewayModule.bind(AxiosGatewayRegistry.USER).to(AxiosUserGateway);
