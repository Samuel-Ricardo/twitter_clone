/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { IPostGateway, Post } from '@/app/modules/@core/post';
import { MODULES } from '@/app/modules';
import { expect } from '@jest/globals';
import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { CREATE_POST_DATA } from '@test/mock/data/post';

describe('[GATEWAY] | AXIOS => [POST]', () => {
  let gateway: IPostGateway;

  beforeAll(() => {
    gateway = MODULES.GATEWAY.AXIOS.POST();

    expect(gateway).toBeInstanceOf(AxiosPostGateway);
  });

  it('[INTEGRATION] | Should: create [POST]', async () => {
    const result = await gateway.create(CREATE_POST_DATA);

    expect(result).toBeInstanceOf(Post);
    expect(result.id).toBeDefined();
  });

  it('[INTEGRATION] | Should: find [all] => [POST]', async () => {
    const result = await gateway.findAll();

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);

    if (result.length > 0) {
      expect(result[0]).toBeInstanceOf(Post);
      expect(result[0].id).toBeDefined();
    }
  });
});
