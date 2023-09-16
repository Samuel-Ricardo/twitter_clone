import { FollowService } from '@/app/modules/@core/follow/service';
import {
  CreateFollowUseCase,
  DeleteFollowUseCase,
  GetFollowersUseCase,
  GetFollowingUseCase,
  CountFollowersUseCase,
  CountFollowingUseCase,
} from '@/app/modules/@core/follow/use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedFollowService {
  service: FollowService;
  use_case: {
    create: DeepMockProxy<CreateFollowUseCase>;
    deleteFollow: DeepMockProxy<DeleteFollowUseCase>;
    get: {
      followers: DeepMockProxy<GetFollowersUseCase>;
      following: DeepMockProxy<GetFollowingUseCase>;
    };
    count: {
      followers: DeepMockProxy<CountFollowersUseCase>;
      following: DeepMockProxy<CountFollowingUseCase>;
    };
  };
}
