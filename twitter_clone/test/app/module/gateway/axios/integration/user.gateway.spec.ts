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

  it('[INTEGRATION] | Should: list [all] => [USER]', async () => {});
});
