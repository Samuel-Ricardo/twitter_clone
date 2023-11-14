/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  CREATE_POST_COMMENT_DATA,
  SWR_POST_COMMENT,
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
} from '@test/mock/data/comment';
import { VALID_POST } from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

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

    const result = await MODULE.service.create(CREATE_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST_COMMENT);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_POST_COMMENT_DATA,
    );

    expect(
      MODULE.use_case.observable.emit.created.executeAsync,
    ).toHaveBeenCalledTimes(1);
    expect(
      MODULE.use_case.observable.emit.created.executeAsync,
    ).toHaveBeenCalledWith(result);
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

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    MODULE.use_case.deleteComment.execute.mockResolvedValue();

    expect(
      MODULE.service.delete({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrow();

    expect(MODULE.use_case.deleteComment.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.deleteComment.execute).toHaveBeenCalledWith({
      id: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should: find by [post] => [COMMENT]', async () => {
    MODULE.use_case.find.by.post.execute.mockReturnValue(
      SWR_POST_COMMENT([VALID_POST_COMMENT.toStruct()]) as any,
    );

    const result = MODULE.service.findByPost({ postId: VALID_POST.id });

    expect(result).toBeDefined();
    expect(JSON.stringify(result.data![0])).toStrictEqual(
      JSON.stringify(VALID_POST_COMMENT.toStruct()),
    );

    expect(result.data![0].postId).toEqual(VALID_POST.id);

    expect(MODULE.use_case.find.by.post.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.post.execute).toHaveBeenCalledWith({
      postId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: find by [author] => [COMMENT]', async () => {
    MODULE.use_case.find.by.author.execute.mockReturnValue(
      SWR_POST_COMMENT([VALID_POST_COMMENT.toStruct()]) as any,
    );

    const result = MODULE.service.findByAuthor({ authorId: VALID_USER.id });

    expect(result).toBeDefined();
    expect(JSON.stringify(result.data![0])).toStrictEqual(
      JSON.stringify(VALID_POST_COMMENT.toStruct()),
    );

    expect(result.data![0].authorId).toEqual(VALID_USER.id);

    expect(MODULE.use_case.find.by.author.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.author.execute).toHaveBeenCalledWith({
      authorId: VALID_USER.id,
    });
  });
});
