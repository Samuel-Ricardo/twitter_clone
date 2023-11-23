/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import { AxiosCommentGateway } from '@/app/modules/gateway/axios/comment/comment.gateway';
import {
  CREATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
} from '@test/mock/data/comment';
import { VALID_POST } from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

describe('[GATEWAY] | Axios => [COMMENT]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.COMMENT.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.COMMENT.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosCommentGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: {
        comment: VALID_POST_COMMENT.toStruct(),
      },
    });

    const result = await MODULE.gateway.create(CREATE_POST_COMMENT_DATA);

    //   expect(result).toStrictEqual(VALID_POST_COMMENT);
    expect(result).toHaveProperty('encrypted');
    expect(MODULE.client.post).toBeCalledTimes(1);
    //expect(MODULE.client.post).toBeCalledWith(
    //  MODULE.gateway.fullURL,
    //  CREATE_POST_COMMENT_DATA,
    //  undefined,
    //);
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    MODULE.client.patch.mockResolvedValue({
      data: {
        comment: UPDATE_POST_COMMENT.toStruct(),
      },
    });

    const result = await MODULE.gateway.update(UPDATE_POST_COMMENT_DATA);

    //    expect(result).toStrictEqual(UPDATE_POST_COMMENT);
    expect(result).toHaveProperty('encrypted');
    //    expect(result.id).toBe(VALID_POST_COMMENT.id);
    //    expect(result.body).not.toBe(VALID_POST_COMMENT.body);
    expect(MODULE.client.patch).toBeCalledTimes(1);
    // expect(MODULE.client.patch).toBeCalledWith(
    //   MODULE.gateway.fullURL,
    //   UPDATE_POST_COMMENT_DATA,
    //   undefined,
    // );
  });

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    MODULE.client.delete.mockResolvedValue({ data: {} });

    expect(
      MODULE.gateway.deleteComment({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrow();
  });

  it('[UNIT] | Should: find by [POST] => [COMMENT]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { comments: [VALID_POST_COMMENT.toStruct()] },
    });

    const result = await MODULE.gateway.findByPost({ postId: VALID_POST.id });

    //    expect(result).toStrictEqual([VALID_POST_COMMENT]);
    //    expect(result[0].postId).toBe(VALID_POST.id);

    expect(result).toHaveProperty('encrypted');

    expect(MODULE.client.get).toBeCalledTimes(1);
    // expect(MODULE.client.get).toBeCalledWith(
    //   `${MODULE.gateway.fullURL}/post/${VALID_POST.id}`,
    //   undefined,
    // );
  });

  it('[UNIT] | Should: find by [USER] => [COMMENT]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { comments: [VALID_POST_COMMENT.toStruct()] },
    });

    const result = await MODULE.gateway.findByauthor({
      authorId: VALID_USER.id,
    });

    //    expect(result).toStrictEqual([VALID_POST_COMMENT]);
    //    expect(result[0].authorId).toBe(VALID_USER.id);

    expect(result).toHaveProperty('encrypted');

    expect(MODULE.client.get).toBeCalledTimes(1);
    // expect(MODULE.client.get).toBeCalledWith(
    //   `${MODULE.gateway.fullURL}/author/${VALID_USER.id}`,
    //   undefined,
    // );
  });
});
