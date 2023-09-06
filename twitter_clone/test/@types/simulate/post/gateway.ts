import { IPostGateway } from '@/app/modules/@core/post';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedPostGateway<G extends IPostGateway, C> {
  gateway: G;
  client: DeepMockProxy<C>;
}
