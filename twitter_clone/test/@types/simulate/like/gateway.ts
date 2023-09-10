import { ILikeGateway } from '@/app/modules/@core/like/gateway';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedLikeGateway<G extends ILikeGateway, C> {
  gateway: G;
  client: DeepMockProxy<C>;
}
