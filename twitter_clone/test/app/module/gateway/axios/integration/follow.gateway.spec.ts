/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { IFollowGateway } from '@/app/modules/@core/follow/gateway/follow.gateway';
import { MODULES } from '@/app/modules/app.factory';
import { User } from '@/app/modules/@core/user/entity/user.entity';
import { Follow } from '@/app/modules/@core/follow/entity';
import { AxiosFollowGateway } from '@/app/modules/gateway/axios/follow/follow.gateway';

describe('[GATEWAY] | Axios => [FOLLOW]', () => {
  let gateway: IFollowGateway;

  let follow: Follow;
  let user: User;

  beforeAll(() => {
    gateway = MODULES.GATEWAY.AXIOS.FOLLOW();

    expect(gateway).toBeInstanceOf(AxiosFollowGateway);
  });

  beforeEach(async () => {
    user = (await MODULES.GATEWAY.AXIOS.USER().listAll())[0];
  });

  it('[INTEGRATION] | Should: get [following] => [FOLLOW]', async () => {
    const result = await gateway.getFollowing({ followerId: user.id });

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);

    if (result.length > 0) {
      expect(result[0]).toBeInstanceOf(Follow);
      expect(result[0].id).toBeDefined();
    }
  });
});
