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

    const result = await MODULE.use_case.create.execute(CREATE_FOLLOW_DATA);

    expect(result).toEqual(VALID_FOLLOW);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_FOLLOW_DATA,
    );
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
  });

  it('[UNIT] | Should: get [followers] => [FOLLOW]', async () => {
    MODULE.use_case.get.followers.execute.mockReturnValue(
      SWR_FOLLOW([VALID_FOLLOW.toStruct()]) as any,
    );

    const result = MODULE.service.getFollowersOf({
      followingId: USER_FOLLOWED.id,
    });

    expect(result.data).toEqual([VALID_FOLLOW.toStruct()]);

    expect(MODULE.use_case.get.followers.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.get.followers.execute).toHaveBeenCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });
});
