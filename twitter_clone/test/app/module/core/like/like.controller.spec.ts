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
  VALID_COMMENT_LIKE,
  VALID_POST_LIKE,
} from '@test/mock/data/like';
import { VALID_POST } from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

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

  it('[UNIT] | Should: Find by [POST] => [LIKE]', async () => {
    MODULE.service.findByPost.mockReturnValue(
      SWR_POST_LIKE([VALID_POST_LIKE.toStruct()]) as any,
    );

    const result = MODULE.controller.getTweetLikes({ likedId: VALID_POST.id });

    expect(result).toBeDefined();
    expect(result.likes.data).toStrictEqual([VALID_POST_LIKE.toStruct()]);
    expect(result.likes.data![0].likedId).toEqual(VALID_POST.id);

    expect(MODULE.service.findByPost).toBeCalledTimes(1);
    expect(MODULE.service.findByPost).toHaveBeenCalledWith({
      likedId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: Find by [COMMENT] => [LIKE]', async () => {
    MODULE.service.findByComment.mockReturnValue(
      SWR_POST_LIKE([VALID_COMMENT_LIKE.toStruct()]) as any,
    );

    const result = MODULE.controller.getCommentLikes({
      likedId: VALID_POST_COMMENT.id,
    });

    expect(result).toBeDefined();
    expect(result.likes.data).toStrictEqual([VALID_COMMENT_LIKE.toStruct()]);
    expect(result.likes.data![0].likedId).toEqual(VALID_POST_COMMENT.id);

    expect(MODULE.service.findByComment).toBeCalledTimes(1);
    expect(MODULE.service.findByComment).toHaveBeenCalledWith({
      likedId: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should: Find by [USER] => [LIKE]', async () => {
    MODULE.service.findByUser.mockReturnValue(
      SWR_POST_LIKE([
        VALID_POST_LIKE.toStruct(),
        VALID_COMMENT_LIKE.toStruct(),
      ]) as any,
    );

    const result = MODULE.controller.getUserLikes({
      userId: VALID_USER.id,
    });

    expect(result).toBeDefined();

    expect(result.likes.data).toStrictEqual([
      VALID_POST_LIKE.toStruct(),
      VALID_COMMENT_LIKE.toStruct(),
    ]);

    expect(result.likes.data![0].userId).toEqual(VALID_USER.id);

    expect(MODULE.service.findByUser).toHaveBeenCalledTimes(1);
    expect(MODULE.service.findByUser).toHaveBeenCalledWith({
      userId: VALID_USER.id,
    });
  });
});
