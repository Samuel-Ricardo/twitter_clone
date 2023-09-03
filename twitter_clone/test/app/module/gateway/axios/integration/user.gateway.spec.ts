/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { MODULES } from '@/app/modules';
import { AxiosUserGateway } from '@/app/modules/gateway/axios/user/user.gateway';
import { expect } from '@jest/globals';
import { User } from '@/app/modules/@core/user/entity/user.entity';

describe('[GATEWAY] | AXIOS => [USER] ', () => {
  let gateway: AxiosUserGateway;

  beforeAll(() => {
    gateway = MODULES.GATEWAY.AXIOS.USER();

    expect(gateway).toBeInstanceOf(AxiosUserGateway);
  });

  it('[INTEGRATION] | Should: list [all] => [USER]', async () => {
    const result = await gateway.listAll();

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);

    expect(result[0]).toBeInstanceOf(User);
    expect(result[0].id).toBeDefined();
  });
});
