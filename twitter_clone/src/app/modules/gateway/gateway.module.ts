import { Container } from 'inversify';
import { AxiosGatewayModule } from './axios/axios.module';
import { REACTIVE_GATEWAY_MODULE } from './reactive/reactive.module';

const Module = new Container({ autoBindInjectable: true });

export const GatewayModule = Container.merge(Module, AxiosGatewayModule);
