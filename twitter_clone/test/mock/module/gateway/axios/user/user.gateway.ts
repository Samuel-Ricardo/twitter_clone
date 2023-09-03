import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { mockDeep } from 'jest-mock-extended';

export const mockUserGateway = () => mockDeep<AxiosUserGateway>();
