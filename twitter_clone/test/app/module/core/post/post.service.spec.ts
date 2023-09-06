/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedPostService } from '@test/@types/simulate/post';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import { CREATE_POST_DATA, VALID_POST } from '@test/mock/data/post';

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
  });
});
