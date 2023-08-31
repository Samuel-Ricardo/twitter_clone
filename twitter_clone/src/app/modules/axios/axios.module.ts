import { Container } from 'inversify';
import { AxiosRegistry } from './axios.registry';
import axios from 'axios';

export const AxiosModule = new Container({ autoBindInjectable: true });

AxiosModule.bind(AxiosRegistry.AXIOS).toConstantValue(axios);
