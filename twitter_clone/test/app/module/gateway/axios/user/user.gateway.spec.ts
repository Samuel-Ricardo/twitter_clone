/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { ISimulatedUserGateweay } from '@test/@types/simulate/user/gateway';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import axios from 'axios';
import { expect } from '@jest/globals';
import { CREATE_USER_DATA, VALID_USER } from '@test/mock/data/user';

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
});
