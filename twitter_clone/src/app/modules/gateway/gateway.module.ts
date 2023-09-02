import { Container } from 'inversify';
import { AxiosGatewayModule } from './axios/axios.module';

const Module = new Container({ autoBindInjectable: true });

export const GatewayModule = Container.merge(Module, AxiosGatewayModule);
