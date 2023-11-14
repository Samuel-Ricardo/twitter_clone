import { Container } from 'inversify';
import { AxiosGatewayModule } from './axios/axios.module';
import { REACTIVE_GATEWAY_MODULE } from './reactive/reactive.module';
import getDecorators from 'inversify-inject-decorators';

const Module = new Container({ autoBindInjectable: true });

export const GatewayModule = Container.merge(
  Module,
  AxiosGatewayModule,
  REACTIVE_GATEWAY_MODULE,
);

//GatewayModule.rebind(ConfigRegistry.API.URL).toConstantValue(CONFIG.API.URL);

export const { lazyInject: injectGateway } = getDecorators(GatewayModule);
