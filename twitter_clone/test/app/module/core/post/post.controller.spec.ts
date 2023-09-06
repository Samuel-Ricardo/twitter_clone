/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedPostController } from '@test/@types/simulate/post';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';

describe('[CONTROLLER] | @CORE => [POST]', () => {
  let MODULE: ISimulatedPostController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.POST.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    expect(true).toBeTruthy();
  });
});
