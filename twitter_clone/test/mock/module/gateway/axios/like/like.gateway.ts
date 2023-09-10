import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosLikeGateway = () => mockDeep<AxiosLikeGateway>();
