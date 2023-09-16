/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { AxiosFollowGateway } from '@/app/modules/gateway/axios/follow/follow.gateway';

describe('[GATEWAY] | Axios => [LIKE]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.FOLLOW.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.FOLLOW.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosFollowGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE]', async () => {
    expect(true).toBe(true);
  });
});
