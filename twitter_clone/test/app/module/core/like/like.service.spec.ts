/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedLikeService } from '@test/@types/simulate/like/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  CREATE_POST_LIKE_DATA,
  SWR_POST_LIKE,
  VALID_POST_LIKE,
} from '@test/mock/data/like';
import { VALID_POST } from '@test/mock/data/post';
import { VALID_POST_COMMENT } from '@test/mock/data/comment';
import { VALID_USER } from '@test/mock/data/user';

describe('[CORE] | Service =:> [LIKE]', () => {
  let MODULE: ISimulatedLikeService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.LIKE.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE] & Emit => [CREATED]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_POST_LIKE);

    const result = await MODULE.service.create(CREATE_POST_LIKE_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST_LIKE);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_POST_LIKE_DATA,
    );

    expect(
      MODULE.use_case.observable.emit.created.execute,
    ).toHaveBeenCalledTimes(1);
    expect(
      MODULE.use_case.observable.emit.created.execute,
    ).toHaveBeenCalledWith(VALID_POST_LIKE.toStruct(), undefined);
  });

  it('[UNIT] | Should: delete => [LIKE] & Emit => [DELETED]', async () => {
    MODULE.use_case.deleteLike.execute.mockResolvedValue();

    await expect(
      MODULE.service.delete({ id: VALID_POST_LIKE.id }),
    ).resolves.not.toThrow();

    expect(MODULE.use_case.deleteLike.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.deleteLike.execute).toHaveBeenCalledWith({
      id: VALID_POST_LIKE.id,
    });

    expect(
      MODULE.use_case.observable.emit.deleted.execute,
    ).toHaveBeenCalledTimes(1);
    expect(
      MODULE.use_case.observable.emit.deleted.execute,
    ).toHaveBeenCalledWith({ id: VALID_POST_LIKE.id });
  });

  it('[UNIT] | Should: Find by [POST] => [LIKE]', async () => {
    MODULE.use_case.find.by.post.execute.mockReturnValue(
      SWR_POST_LIKE([VALID_POST_LIKE.toStruct()]) as any,
    );

    const result = MODULE.service.findByPost({ likedId: VALID_POST.id });

    expect(result).toBeDefined();
    expect(result.data).toStrictEqual([VALID_POST_LIKE.toStruct()]);

    expect(MODULE.use_case.find.by.post.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.post.execute).toHaveBeenCalledWith({
      likedId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: Find by [COMMENT] => [LIKE]', async () => {
    MODULE.use_case.find.by.comment.execute.mockReturnValue(
      SWR_POST_LIKE([VALID_POST_LIKE.toStruct()]) as any,
    );

    const result = MODULE.service.findByComment({
      likedId: VALID_POST_COMMENT.id,
    });

    expect(result).toBeDefined();
    expect(result.data).toStrictEqual([VALID_POST_LIKE.toStruct()]);

    expect(MODULE.use_case.find.by.comment.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.comment.execute).toHaveBeenCalledWith({
      likedId: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should: Find by [USER] => [LIKE]', async () => {
    MODULE.use_case.find.by.user.execute.mockReturnValue(
      SWR_POST_LIKE([VALID_POST_LIKE.toStruct()]) as any,
    );

    const result = MODULE.service.findByUser({
      userId: VALID_USER.id,
    });

    expect(result).toBeDefined();
    expect(result.data).toStrictEqual([VALID_POST_LIKE.toStruct()]);

    expect(MODULE.use_case.find.by.user.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.user.execute).toHaveBeenCalledWith({
      userId: VALID_USER.id,
    });
  });
});
