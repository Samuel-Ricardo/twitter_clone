import { FollowService } from '@/app/modules/@core/follow/service';
import { mockDeep } from 'jest-mock-extended';

export const mockFollowService = () => mockDeep<FollowService>();
