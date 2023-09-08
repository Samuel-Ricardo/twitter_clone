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
import { VALID_POST } from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

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

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    MODULE.service.delete.mockResolvedValue();

    expect(
      MODULE.controller.delete({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrow();

    expect(MODULE.service.delete).toHaveBeenCalledTimes(1);
    expect(MODULE.service.delete).toHaveBeenCalledWith({
      id: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should:  find  by [post] => [COMMENT]', async () => {
    MODULE.service.findByPost.mockReturnValue(
      SWR_POST_COMMENT([VALID_POST_COMMENT.toStruct()]) as any,
    );

    const result = MODULE.controller.findPostComments({
      postId: VALID_POST.id,
    });

    expect(result).toBeDefined();
    expect(result.comments.data).toStrictEqual([VALID_POST_COMMENT.toStruct()]);

    expect(result.comments.data![0].postId).toEqual(VALID_POST.id);

    expect(MODULE.service.findByPost).toHaveBeenCalledTimes(1);
    expect(MODULE.service.findByPost).toHaveBeenCalledWith({
      postId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should:  find  by [author] => [COMMENT]', async () => {
    MODULE.service.findByAuthor.mockReturnValue(
      SWR_POST_COMMENT([VALID_POST_COMMENT.toStruct()]) as any,
    );

    const result = MODULE.controller.findUserComments({
      authorId: VALID_USER.id,
    });

    expect(result).toBeDefined();
    expect(result.comments.data).toStrictEqual([VALID_POST_COMMENT.toStruct()]);
    expect(result.comments.data![0].authorId).toEqual(VALID_USER.id);

    expect(MODULE.service.findByAuthor).toHaveBeenCalledTimes(1);
    expect(MODULE.service.findByAuthor).toHaveBeenCalledWith({
      authorId: VALID_USER.id,
    });
  });
});
