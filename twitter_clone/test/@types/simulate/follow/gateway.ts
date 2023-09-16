import { IFollowGateway } from '@/app/modules/@core/follow/gateway/follow.gateway';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedFollowGateway<G extends IFollowGateway, C> {
  gateway: G;
  client: DeepMockProxy<C>;
}
