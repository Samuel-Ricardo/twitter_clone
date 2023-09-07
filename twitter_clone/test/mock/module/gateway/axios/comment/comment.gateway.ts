import { AxiosCommentGateway } from '@/app/modules/gateway/axios/comment/comment.gateway';
import { mockDeep } from 'jest-mock-extended';

export const mockAxiosCommentGateway = () => mockDeep<AxiosCommentGateway>();
