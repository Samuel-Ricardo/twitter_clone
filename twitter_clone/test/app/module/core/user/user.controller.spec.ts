/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedUserController } from '@test/@types/simulate/user/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';

describe('[CONTROLLER] | @CORE => [USER]', () => {
  let MODULE: ISimulatedUserController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.USER.CONTROLLER.SIMULATE;

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [USER]', async () => {
    expect(true).toBeTruthy();
  });
});
