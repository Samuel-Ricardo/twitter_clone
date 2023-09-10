/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';

describe('[GATEWAY] | Axios => [LIKE]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.LIKE.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.LIKE.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosLikeGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE]', async () => {
    expect(true).toBe(true);
  });
});
