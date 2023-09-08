/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[CORE] | SERVICE =:> [COMMENT]', () => {
  let MODULE: ISimulatedCommentService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.COMMENT.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_POST_COMMENT);

    const result = await MODULE.service.create(VALID_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST_COMMENT);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      VALID_POST_COMMENT_DATA,
    );
  });
});
