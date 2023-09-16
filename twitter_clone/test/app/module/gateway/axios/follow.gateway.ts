/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { AxiosFollowGateway } from '@/app/modules/gateway/axios/follow/follow.gateway';
import { CREATE_FOLLOW_DATA, VALID_FOLLOW } from '@test/mock/data/follow';

describe('[GATEWAY] | Axios => [FOLLOW]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.FOLLOW.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.FOLLOW.SIMULATE();

    expect(MODULE.gateway).toBeInstanceOf(AxiosFollowGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: {
        follow: VALID_FOLLOW.toStruct(),
      },
    });

    const result = await MODULE.gateway.create(CREATE_FOLLOW_DATA);

    expect(result).toStrictEqual(VALID_FOLLOW);
    expect(MODULE.client.post).toBeCalledTimes(1);
    expect(MODULE.client.post).toBeCalledWith(
      MODULE.gateway.fullURL,
      VALID_FOLLOW,
      undefined,
    );
  });

  it('[UNIT] | Should: delete => [FOLLOW]', async () => {
    MODULE.client.delete.mockResolvedValue({
      data: {},
    });

    expect(
      MODULE.gateway.deleteFollow({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();
  });

  it('[UNIT] | Should: get [followers] => [FOLLOW]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: {
        followers: [VALID_FOLLOW.toStruct()],
      },
    });

    const result = await MODULE.gateway.getFollowers({
      followingId: VALID_FOLLOW.followingId,
    });

    expect(result).toStrictEqual([VALID_FOLLOW]);
    expect(MODULE.client.get).toBeCalledTimes(1);
    expect(MODULE.client.get).toBeCalledWith(
      MODULE.gateway.fullURL,
      { followingId: VALID_FOLLOW.followingId },
      undefined,
    );
  });
});
