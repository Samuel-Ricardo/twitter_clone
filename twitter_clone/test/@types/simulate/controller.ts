import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatedController<C, S> {
  controller: C;
  service: DeepMockProxy<S>;
}
