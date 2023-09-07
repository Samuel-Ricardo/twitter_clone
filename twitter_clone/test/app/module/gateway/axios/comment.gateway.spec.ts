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
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[GATEWAY] | Axios => [POST]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.COMMENT.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.COMMENT.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosCommentGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: {
        comment: VALID_POST_COMMENT.toStruct(),
      },
    });

    const result = await MODULE.gateway.create(CREATE_POST_COMMENT_DATA);

    expect(result).toStrictEqual(VALID_POST_COMMENT);
    expect(MODULE.client.post).toBeCalledTimes(1);
    expect(MODULE.client.post).toBeCalledWith(
      MODULE.gateway.fullURL,
      CREATE_POST_COMMENT_DATA,
      undefined,
    );
  });
});
