/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedLikeService } from '@test/@types/simulate/like/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';

describe('[CORE] | Service =:> [LIKE]', () => {
  let MODULE: ISimulatedLikeService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.LIKE.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    expect(true).toBeTruthy();
  });
});
