/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedLikeController } from '@test/@types/simulate/like/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';

describe('[CORE] | Controller =:> [LIKE]', () => {
  let MODULE: ISimulatedLikeController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.LIKE.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    expect(true).toBeTruthy();
  });
});
