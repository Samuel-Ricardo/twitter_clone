import { AXIOS_MODULE_MOCK } from './axios.module';
import axios from 'axios';
import { AXIOS_REGISTRY_MOCK } from './axios.registry';

export const AXIOS_FACTORY_MOCK = {
  MOCK: AXIOS_MODULE_MOCK.get<typeof axios>(AXIOS_REGISTRY_MOCK.MOCK),
};
