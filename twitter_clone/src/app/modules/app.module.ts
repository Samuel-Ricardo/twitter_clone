import { Container } from 'inversify';
import { AxiosModule } from './axios/axios.module';

const Module = new Container({ autoBindInjectable: true });

export const AppModule = Container.merge(Module, AxiosModule);
