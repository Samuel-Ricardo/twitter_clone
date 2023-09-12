/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedLikeController } from '@test/@types/simulate/like/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { VALID_POST_COMMENT } from '@test/mock/data/comment';
import {
  CREATE_POST_LIKE_DATA,
  SWR_POST_LIKE,
  VALID_POST_LIKE,
} from '@test/mock/data/like';

describe('[CORE] | Controller =:> [LIKE]', () => {
  let MODULE: ISimulatedLikeController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.LIKE.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_POST_LIKE);

    const result = await MODULE.controller.create(CREATE_POST_LIKE_DATA);

    expect(result).toBeDefined();
    expect(result.like).toStrictEqual(VALID_POST_LIKE.toStruct());

    expect(MODULE.service.create).toHaveBeenCalledTimes(1);
    expect(MODULE.service.create).toHaveBeenCalledWith(CREATE_POST_LIKE_DATA);
  });

  it('[UNIT] | Should: delete => [LIKE]', async () => {
    MODULE.service.delete.mockResolvedValue();

    expect(
      MODULE.controller.dislike({ id: VALID_POST_LIKE.id }),
    ).resolves.not.toThrow();

    expect(MODULE.service.delete).toHaveBeenCalledTimes(1);
    expect(MODULE.service.delete).toHaveBeenCalledWith({
      id: VALID_POST_LIKE.id,
    });
  });
});
