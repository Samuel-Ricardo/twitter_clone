import { IUserGateway } from '@/app/modules/@core/user/gateway';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedUserGateweay<G extends IUserGateway, C> {
  gateway: G;
  client: DeepMockProxy<C>;
}
