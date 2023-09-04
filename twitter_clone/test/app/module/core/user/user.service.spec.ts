/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect, describe, it } from '@jest/globals';
import { ISimulatedUserService } from '@test/@types';
import { MODULES_MOCK } from '@test/mock/module/app.factory';

describe('[SERVICE] | @CORE => [USER]', () => {
  let MODULE: ISimulatedUserService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.USER.SERVICE.SIMULATE;

    console.log({ MODULE });

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [USER]', async () => {
    expect(true).toBeTruthy();
  });
});
