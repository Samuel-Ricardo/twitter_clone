/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedFollowController } from '@test/@types/simulate/follow/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { FollowController } from '@/app/modules/@core/follow/controller';
import {
  CREATE_FOLLOW_DATA,
  SWR_FOLLOW,
  USER_FOLLOWED,
  VALID_FOLLOW,
} from '@test/mock/data/follow';

describe('[CORE] | CONTROLLER =:> [FOLLOW]', () => {
  let MODULE: ISimulatedFollowController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.FOLLOW.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();

    expect(MODULE.controller).toBeInstanceOf(FollowController);
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_FOLLOW);

    const result = await MODULE.controller.follow(CREATE_FOLLOW_DATA);

    expect(result).toEqual({ follow: VALID_FOLLOW.toStruct() });

    expect(MODULE.service.create).toHaveBeenCalledTimes(1);
    expect(MODULE.service.create).toHaveBeenCalledWith(CREATE_FOLLOW_DATA);
  });

  it('[UNIT] | Should: delete => [FOLLOW]', async () => {
    MODULE.service.delete.mockResolvedValue();

    expect(
      MODULE.controller.unfollow({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();

    expect(MODULE.service.delete).toHaveBeenCalledTimes(1);
    expect(MODULE.service.delete).toHaveBeenCalledWith({ id: VALID_FOLLOW.id });
  });

  it('[UNIT] | Should: get [followers] => [FOLLOW]', async () => {
    MODULE.service.getFollowersOf.mockReturnValue(
      SWR_FOLLOW([VALID_FOLLOW.toStruct()]) as any,
    );

    const result = MODULE.controller.followersOf({
      followingId: USER_FOLLOWED.id,
    });

    expect(result.followers.data).toStrictEqual([VALID_FOLLOW.toStruct()]);
    expect(result.followers.data![0].followingId).toStrictEqual(
      USER_FOLLOWED.id,
    );

    expect(MODULE.service.getFollowersOf).toHaveBeenCalledTimes(1);
  });
});
