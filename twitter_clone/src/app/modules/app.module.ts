import { Container } from 'inversify';
import { AxiosModule as AXIOS } from './axios/axios.module';
import { GatewayModule as GATEWAY } from './gateway/gateway.module';

const Module = new Container({ autoBindInjectable: true });

export const AppModule = Container.merge(Module, AXIOS, GATEWAY);
