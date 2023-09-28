/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ILikeGateway } from '@/app/modules/@core/like/gateway';
import { MODULES } from '@/app/modules';
import { AxiosLikeGateway } from '@/app/modules/gateway/axios/like/like.gateway';
import { Post } from '@/app/modules/@core/post';
import { Like } from '@/app/modules/@core/like/entity';

describe('[GATEWAY] | Axios => [LIKE]', () => {
  let gatewat: ILikeGateway;
  let post: Post;

  beforeAll(() => {
    gatewat = MODULES.GATEWAY.AXIOS.LIKE();

    expect(gatewat).toBeInstanceOf(AxiosLikeGateway);
  });

  beforeEach(async () => {
    post = (await MODULES.GATEWAY.AXIOS.POST().findAll())[0];
  });

  it('[INTEGRATION] | Should: find by [POST] => [LIKE]', async () => {
    const result = await gatewat.findPostLikes({ likedId: post.id });

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);

    if (result.length > 0) {
      expect(result[0]).toBeInstanceOf(Like);
      expect(result[0].id).toBeDefined();
    }
  });
});
