/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedFollowController } from '@test/@types/simulate/follow/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { FollowController } from '@/app/modules/@core/follow/controller';
import { CREATE_FOLLOW_DATA, VALID_FOLLOW } from '@test/mock/data/follow';

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
});
