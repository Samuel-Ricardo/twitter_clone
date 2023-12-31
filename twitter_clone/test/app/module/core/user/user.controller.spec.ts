/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedUserController } from '@test/@types/simulate/user/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import {
  CREATE_USER_DATA,
  SWR_USER,
  UPDATE_USER_DATA,
  VALID_UPDATE_USER,
  VALID_USER,
} from '@test/mock/data/user';
import { IUserDTO } from '@/app/modules/@core/user/DTO';
import { SWRResponse } from 'swr';

describe('[CONTROLLER] | @CORE => [USER]', () => {
  let MODULE: ISimulatedUserController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.USER.CONTROLLER.SIMULATE;

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [USER]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_USER);

    const result = await MODULE.controller.create(CREATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual({ user: VALID_USER.toStruct() });

    expect(MODULE.service.create).toHaveBeenCalledTimes(1);
    expect(MODULE.service.create).toHaveBeenCalledWith(CREATE_USER_DATA);
  });

  it('[UNIT] | Should: update => [USER]', async () => {
    MODULE.service.update.mockResolvedValue(VALID_UPDATE_USER);

    const result = await MODULE.controller.update(UPDATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual({ user: VALID_UPDATE_USER.toStruct() });

    expect(MODULE.service.update).toHaveBeenCalledTimes(1);
    expect(MODULE.service.update).toHaveBeenCalledWith(UPDATE_USER_DATA);
  });

  it('[UNIT] | Should: delete => [USER]', async () => {
    MODULE.service.delete.mockResolvedValue({});

    expect(
      MODULE.controller.delete({ id: VALID_USER.id }),
    ).resolves.not.toThrow();
  });

  it('[UNIT] | Should: list [all] => [USER]', async () => {
    MODULE.service.listAll.mockReturnValue(
      SWR_USER([VALID_USER.toStruct()]) as SWRResponse<IUserDTO[], any, any>,
    );

    const result = MODULE.controller.listAll();

    expect(result).toBeDefined();
    expect(JSON.stringify(result.users)).toStrictEqual(
      JSON.stringify(SWR_USER([VALID_USER.toStruct()])),
    ),
      expect(MODULE.service.listAll).toHaveBeenCalledTimes(1);
    expect(MODULE.service.listAll).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: select by [id] => [USER]', async () => {
    MODULE.service.selectById.mockReturnValue(
      SWR_USER(VALID_USER.toStruct()) as SWRResponse<IUserDTO, any, any>,
    );

    const result = MODULE.controller.selectById({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(JSON.stringify(result.user)).toStrictEqual(
      JSON.stringify(SWR_USER(VALID_USER.toStruct())),
    );

    expect(MODULE.service.selectById).toHaveBeenCalledTimes(1);
    expect(MODULE.service.selectById).toHaveBeenCalledWith({
      id: VALID_USER.id,
    });
  });
});
