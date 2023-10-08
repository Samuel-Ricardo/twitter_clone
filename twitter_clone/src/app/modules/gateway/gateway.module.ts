import { Container } from 'inversify';
import { AxiosGatewayModule } from './axios/axios.module';
import { REACTIVE_GATEWAY_MODULE } from './reactive/reactive.module';
import { ConfigRegistry } from '../config/config.registry';
import { CONFIG } from '../config/app.config';

const Module = new Container({ autoBindInjectable: true });

export const GatewayModule = Container.merge(
  Module,
  AxiosGatewayModule,
  REACTIVE_GATEWAY_MODULE,
);

GatewayModule.rebind(ConfigRegistry.API.URL).toConstantValue(CONFIG.API.URL);
