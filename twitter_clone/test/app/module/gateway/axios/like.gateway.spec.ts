/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';
import {
  CREATE_POST_LIKE_DATA,
  VALID_POST_LIKE,
  VALID_POST_LIKE_DATA,
} from '@test/mock/data/like';

describe('[GATEWAY] | Axios => [LIKE]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.LIKE.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.LIKE.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosLikeGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: {
        like: VALID_POST_LIKE.toStruct(),
      },
    });

    const result = await MODULE.gateway.create(CREATE_POST_LIKE_DATA);

    expect(result).toStrictEqual(VALID_POST_LIKE);

    expect(MODULE.client.post).toBeCalledTimes(1);
    expect(MODULE.client.post).toBeCalledWith(
      MODULE.gateway.fullURL,
      CREATE_POST_LIKE_DATA,
      undefined,
    );
  });

  it('[UNIT] | Should: delete => [LIKE]', async () => {
    MODULE.client.delete.mockResolvedValue({
      data: {
        like: VALID_POST_LIKE.toStruct(),
      },
    });

    expect(
      MODULE.gateway.deleteLike({ id: VALID_POST_LIKE.id }),
    ).resolves.not.toThrow();
  });
});
