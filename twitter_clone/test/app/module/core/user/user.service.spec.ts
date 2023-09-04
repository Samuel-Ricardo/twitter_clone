/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect, describe, it } from '@jest/globals';
import { ISimulatedUserService } from '@test/@types';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  CREATE_USER_DATA,
  UPDATE_USER_DATA,
  VALID_UPDATE_USER,
  VALID_USER,
} from '@test/mock/data/user';

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

  it('[UNIT] | Should: update => [USER]', async () => {
    MODULE.use_case.update.execute.mockResolvedValue(VALID_UPDATE_USER);

    const result = await MODULE.service.update(UPDATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_UPDATE_USER);

    expect(result.id).toEqual(VALID_USER.id);
    expect(result.bio).not.toEqual(VALID_USER.bio);

    expect(MODULE.use_case.update.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.update.execute).toHaveBeenCalledWith(
      UPDATE_USER_DATA,
    );
  });
});
