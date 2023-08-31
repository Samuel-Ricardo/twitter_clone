import { AxiosModule } from './axios.module';
import axios from 'axios';
import { AxiosRegistry } from './axios.registry';

export const AxiosFactory = {
  AXIOS: () => AxiosModule.get<typeof axios>(AxiosRegistry.AXIOS),
};
