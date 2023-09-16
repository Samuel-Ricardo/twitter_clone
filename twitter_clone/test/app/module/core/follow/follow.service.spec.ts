/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedFollowService } from '@test/@types/simulate/follow/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { FollowService } from '@/app/modules/@core/follow/service';

describe('[CORE] | SERVICE => [FOLLOW]', () => {
  let MODULE: ISimulatedFollowService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.FOLLOW.SERVICE.SIMULATE();

    expect(MODULE.service).toBeInstanceOf(FollowService);
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    expect(true).toBeTruthy();
  });
});
