/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedFollowService } from '@test/@types/simulate/follow/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { FollowService } from '@/app/modules/@core/follow/service';
import {
  CREATE_FOLLOW_DATA,
  SWR_FOLLOW,
  USER_FOLLOWED,
  USER_FOLLOWER,
  VALID_FOLLOW,
} from '@test/mock/data/follow';

describe('[CORE] | SERVICE => [FOLLOW]', () => {
  let MODULE: ISimulatedFollowService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.FOLLOW.SERVICE.SIMULATE();

    expect(MODULE.service).toBeInstanceOf(FollowService);
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_FOLLOW);

    const result = await MODULE.service.create(CREATE_FOLLOW_DATA);

    expect(result).toEqual(VALID_FOLLOW);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_FOLLOW_DATA,
    );

    expect(
      MODULE.use_case.observable.emit.created.executeAsync,
    ).toHaveBeenCalledTimes(1);
    expect(
      MODULE.use_case.observable.emit.created.executeAsync,
    ).toHaveBeenCalledWith(VALID_FOLLOW);
  });

  it('[UNIT] | Should: delete => [FOLLOW]', async () => {
    MODULE.use_case.deleteFollow.execute.mockResolvedValue();

    expect(
      MODULE.service.delete({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();

    expect(MODULE.use_case.deleteFollow.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.deleteFollow.execute).toHaveBeenCalledWith({
      id: VALID_FOLLOW.id,
    });

    expect(
      MODULE.use_case.observable.emit.deleted.executeAsync,
    ).toHaveBeenCalledTimes(1);
    expect(
      MODULE.use_case.observable.emit.deleted.executeAsync,
    ).toHaveBeenCalledWith(VALID_FOLLOW);
  });

  it('[UNIT] | Should: get [followers] => [FOLLOW]', async () => {
    MODULE.use_case.get.followers.execute.mockReturnValue(
      SWR_FOLLOW([VALID_FOLLOW.toStruct()]) as any,
    );

    const result = MODULE.service.getFollowersOf({
      followingId: USER_FOLLOWED.id,
    });

    expect(result.data).toEqual([VALID_FOLLOW.toStruct()]);
    expect(result.data![0].followingId).toEqual(USER_FOLLOWED.id);

    expect(MODULE.use_case.get.followers.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.get.followers.execute).toHaveBeenCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });

  it('[UNIT] | Should: get [following] => [FOLLOW]', async () => {
    MODULE.use_case.get.following.execute.mockReturnValue(
      SWR_FOLLOW([VALID_FOLLOW.toStruct()]) as any,
    );

    const result = MODULE.service.getFollowingOf({
      followerId: USER_FOLLOWER.id,
    });

    expect(result.data).toEqual([VALID_FOLLOW.toStruct()]);
    expect(result.data![0].followerId).toEqual(USER_FOLLOWER.id);

    expect(MODULE.use_case.get.following.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.get.following.execute).toHaveBeenCalledWith({
      followerId: USER_FOLLOWER.id,
    });
  });

  it('[UNIT] | Should: count [followers] => [FOLLOW]', async () => {
    MODULE.use_case.count.followers.execute.mockReturnValue(
      SWR_FOLLOW(10) as any,
    );

    const result = MODULE.service.countFollowersOf({
      followingId: USER_FOLLOWED.id,
    });

    expect(result.data).toEqual(10);

    expect(MODULE.use_case.count.followers.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.count.followers.execute).toHaveBeenCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });

  it('[UNIT] | Should: count [following] => [FOLLOW]', async () => {
    MODULE.use_case.count.following.execute.mockReturnValue(
      SWR_FOLLOW(10) as any,
    );

    const result = MODULE.service.countFollowingOf({
      followerId: USER_FOLLOWER.id,
    });

    expect(result.data).toEqual(10);

    expect(MODULE.use_case.count.following.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.count.following.execute).toHaveBeenCalledWith({
      followerId: USER_FOLLOWER.id,
    });
  });
});
