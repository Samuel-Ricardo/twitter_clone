import 'reflect-metadata';

import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import axios from 'axios';
import { expect } from '@jest/globals';

describe('[GATEWAY] | AXIOS => [USER]', () => {
  let MODULE: ISimulatedUserGateweay<AxiosUserGateway, typeof axios>;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.USER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.gateway).toBeInstanceOf(AxiosUserGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('should be defined', () => {
    expect(MODULE).toBeDefined();
  });
});
