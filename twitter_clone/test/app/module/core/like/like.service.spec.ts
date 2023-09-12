/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedLikeService } from '@test/@types/simulate/like/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { CREATE_POST_LIKE_DATA, VALID_POST_LIKE } from '@test/mock/data/like';

describe('[CORE] | Service =:> [LIKE]', () => {
  let MODULE: ISimulatedLikeService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.LIKE.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_POST_LIKE);

    const result = await MODULE.service.create(CREATE_POST_LIKE_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST_LIKE);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_POST_LIKE_DATA,
    );
  });
});
