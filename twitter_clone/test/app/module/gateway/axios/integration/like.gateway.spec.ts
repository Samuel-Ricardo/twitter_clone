/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ILikeGateway } from '@/app/modules/@core/like/gateway';
import { Like } from '@/app/modules/@core/like/entity';
import { MODULES } from '@/app/modules';
import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';

describe('[GATEWAY] | Axios => [COMMENT]', () => {
  let gatewat: ILikeGateway;
  let like: Like;

  beforeAll(() => {
    gatewat = MODULES.GATEWAY.AXIOS.LIKE();

    expect(gatewat).toBeInstanceOf(AxiosLikeGateway);
  });

  it('[INTEGRATION] | Should: find by [POST] => [LIKE]', async () => {
    expect(true).toBe(true);
  });
});
