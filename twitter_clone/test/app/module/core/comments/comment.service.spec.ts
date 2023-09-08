/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';
import { VALID_UPDATED_POST } from '@test/mock/data/post';

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

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    MODULE.use_case.update.execute.mockResolvedValue(UPDATE_POST_COMMENT);

    const result = await MODULE.service.update(UPDATE_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(UPDATE_POST_COMMENT);

    expect(result.id).toEqual(VALID_POST_COMMENT.id);
    expect(result.body).not.toEqual(VALID_POST_COMMENT.body);

    expect(MODULE.use_case.update.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.update.execute).toHaveBeenCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );
  });
});
