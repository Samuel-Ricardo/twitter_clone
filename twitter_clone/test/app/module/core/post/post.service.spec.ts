/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedPostService } from '@test/@types/simulate/post';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import {
  CREATE_POST_DATA,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_UPDATED_POST,
} from '@test/mock/data/post';

describe('[SERVICE] | POST', () => {
  let MODULE: ISimulatedPostService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.POST.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_POST);

    const result = await MODULE.service.create(CREATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_POST_DATA,
    );
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    MODULE.use_case.update.execute.mockResolvedValue(VALID_UPDATED_POST);

    const result = await MODULE.service.update(UPDATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_UPDATED_POST);

    expect(result.id).toEqual(VALID_POST.id);
    expect(result.body).not.toEqual(VALID_POST.body);

    expect(MODULE.use_case.update.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.update.execute).toHaveBeenCalledWith(
      UPDATE_POST_DATA,
    );
  });
});
