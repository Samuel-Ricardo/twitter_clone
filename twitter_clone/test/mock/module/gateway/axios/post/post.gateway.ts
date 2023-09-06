import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { mockDeep } from 'jest-mock-extended';

export const mockPostGateway = () => mockDeep<AxiosPostGateway>();
