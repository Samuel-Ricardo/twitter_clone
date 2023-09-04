/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect, describe, it } from '@jest/globals';
import { ISimulatedUserService } from '@test/@types';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { CREATE_USER_DATA, VALID_USER } from '@test/mock/data/user';

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
    MODULE.use_case.create.execute.mockResolvedValue(VALID_USER);

    const result = await MODULE.service.create(CREATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_USER);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_USER_DATA,
    );
  });
});
