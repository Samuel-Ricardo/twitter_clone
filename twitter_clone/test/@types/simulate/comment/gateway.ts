import { ICommentGateway } from '@/app/modules/@core/comment/gateway';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedCommentGateway<G extends ICommentGateway, C> {
  gateway: G;
  client: DeepMockProxy<C>;
}
