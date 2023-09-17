/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedFollowController } from '@test/@types/simulate/follow/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { FollowController } from '@/app/modules/@core/follow/controller';

describe('[CORE] | CONTROLLER =:> [FOLLOW]', () => {
  let MODULE: ISimulatedFollowController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.FOLLOW.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();

    expect(MODULE.controller).toBeInstanceOf(FollowController);
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {});
});
