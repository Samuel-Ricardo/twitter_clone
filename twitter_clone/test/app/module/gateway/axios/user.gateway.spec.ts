/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import axios from 'axios';
import { expect } from '@jest/globals';
import {
  CREATE_USER_DATA,
  UPDATE_USER_DATA,
  VALID_UPDATE_USER as VALID_UPDATED_USER,
  VALID_USER,
} from '@test/mock/data/user';

describe('[GATEWAY] | AXIOS => [USER]', () => {
  let MODULE: ISimulatedUserGateweay<AxiosUserGateway, typeof axios>;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.GATEWAY.AXIOS.USER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.gateway).toBeInstanceOf(AxiosUserGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [USER]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: { user: VALID_USER.toStruct() },
    });

    const result = await MODULE.gateway.create(CREATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_USER);
    expect(MODULE.client.post).toHaveBeenCalledTimes(1);
    expect(MODULE.client.post).toHaveBeenCalledWith(
      MODULE.gateway.fullURL,
      CREATE_USER_DATA,
      undefined,
    );
  });

  it('[UNIT] | Should: list [all] => [USER]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { users: [VALID_USER.toStruct()] },
    });

    const result = await MODULE.gateway.listAll();

    expect(result).toBeDefined();
    expect(result).toEqual([VALID_USER]);
    expect(MODULE.client.get).toHaveBeenCalledTimes(1);
    expect(MODULE.client.get).toHaveBeenCalledWith(
      MODULE.gateway.fullURL,
      undefined,
    );
  });

  it('[UNIT] | Should: select [by] => [USER]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { user: VALID_USER.toStruct() },
    });

    const result = await MODULE.gateway.selectById({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_USER);
    expect(MODULE.client.get).toHaveBeenCalledTimes(1);
    expect(MODULE.client.get).toHaveBeenCalledWith(
      `${MODULE.gateway.fullURL}/${VALID_USER.id}`,
      undefined,
    );
  });

  it('[UNIT] | Should: update => [USER]', async () => {
    MODULE.client.patch.mockResolvedValue({
      data: { user: VALID_UPDATED_USER.toStruct() },
    });

    const result = await MODULE.gateway.update(UPDATE_USER_DATA);

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_UPDATED_USER);
    expect(result.id).toEqual(VALID_USER.id);
    expect(result.bio).not.toEqual(VALID_USER.bio);

    expect(MODULE.client.patch).toHaveBeenCalledTimes(1);
    expect(MODULE.client.patch).toHaveBeenCalledWith(
      MODULE.gateway.fullURL,
      UPDATE_USER_DATA,
      undefined,
    );
  });

  it('[UNIT] | Should: delete => [USER]', async () => {
    MODULE.client.delete.mockResolvedValue({ status: 204 });

    expect(
      MODULE.gateway.deleteUser({ id: VALID_USER.id }),
    ).resolves.not.toThrow();
  });
});
