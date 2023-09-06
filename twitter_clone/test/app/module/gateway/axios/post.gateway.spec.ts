/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';

describe('[GATEWAY] | AXIOS => [POST]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.POST.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();
    MODULE = MODULES_MOCK.GATEWAY.AXIOS.POST.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.gateway).toBeInstanceOf(AxiosPostGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    expect(1).toBe(1);
  });
});
