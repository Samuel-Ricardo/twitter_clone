/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentController } from '@test/@types/simulate/comment/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
  SWR_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  CREATE_POST_COMMENT_DATA,
  UPDATE_POST_COMMENT,
} from '@test/mock/data/comment';

describe('[CORE] | CONTROLLER =:> [COMMENT]', () => {
  let MODULE: ISimulatedCommentController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.COMMENT.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_POST_COMMENT);

    const result = await MODULE.controller.create(CREATE_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual({ comment: VALID_POST_COMMENT.toStruct() });

    expect(MODULE.service.create).toHaveBeenCalledTimes(1);
    expect(MODULE.service.create).toHaveBeenCalledWith(
      CREATE_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    MODULE.service.update.mockResolvedValue(UPDATE_POST_COMMENT);

    const result = await MODULE.controller.update(UPDATE_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result.comment).toStrictEqual(UPDATE_POST_COMMENT.toStruct());

    expect(result.comment.id).toEqual(VALID_POST_COMMENT.id);
    expect(result.comment.body).not.toEqual(VALID_POST_COMMENT.body);

    expect(MODULE.service.update).toHaveBeenCalledTimes(1);
    expect(MODULE.service.update).toHaveBeenCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );
  });
});
