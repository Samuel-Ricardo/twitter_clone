/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { AxiosPostGateway } from '@/app/modules/gateway/axios/post/post.gateway';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import {
  CREATE_POST_DATA,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_UPDATED_POST,
} from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

describe('[GATEWAY] | AXIOS => [POST]', () => {
  let MODULE = MODULES_MOCK.GATEWAY.AXIOS.POST.SIMULATE();

  beforeEach(() => {
    jest.clearAllMocks();
    MODULE = MODULES_MOCK.GATEWAY.AXIOS.POST.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.gateway).toBeInstanceOf(AxiosPostGateway);
    expect(MODULE.client).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    MODULE.client.post.mockResolvedValue({
      data: { post: VALID_POST.toStruct() },
      status: 200,
    });

    const result = await MODULE.gateway.create(CREATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_POST);

    expect(MODULE.client.post).toHaveBeenCalledTimes(1);
    expect(MODULE.client.post).toHaveBeenCalledWith(
      MODULE.gateway.fullURL,
      CREATE_POST_DATA,
      undefined,
    );
  });

  it('[UNIT] | Should: find [all] => [POST]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { posts: [VALID_POST.toStruct()] },
    });

    const result = await MODULE.gateway.findAll();

    expect(result).toBeDefined();
    expect(result).toEqual([VALID_POST]);

    expect(MODULE.client.get).toHaveBeenCalledTimes(1);
    expect(MODULE.client.get).toHaveBeenCalledWith(
      MODULE.gateway.fullURL,
      undefined,
    );
  });

  it('[UNIT] | Should: find by [id] => [POST]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { post: VALID_POST.toStruct() },
    });

    const result = await MODULE.gateway.findById({ id: VALID_POST.id });

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_POST);

    expect(MODULE.client.get).toHaveBeenCalledTimes(1);
    expect(MODULE.client.get).toHaveBeenCalledWith(
      `${MODULE.gateway.fullURL}/${VALID_POST.id}`,
      undefined,
    );
  });

  it('[UNIT] | Should: find by [author] => [POST]', async () => {
    MODULE.client.get.mockResolvedValue({
      data: { posts: [VALID_POST.toStruct()] },
    });

    const result = await MODULE.gateway.findByAuhorId({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(result).toEqual([VALID_POST]);

    expect(MODULE.client.get).toHaveBeenCalledTimes(1);
    expect(MODULE.client.get).toHaveBeenCalledWith(
      `${MODULE.gateway.fullURL}/author/${VALID_USER.id}`,
      undefined,
    );
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    MODULE.client.patch.mockResolvedValue({
      data: { post: VALID_UPDATED_POST.toStruct() },
    });

    const result = await MODULE.gateway.update(UPDATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toEqual(VALID_UPDATED_POST);
    expect(result.id).toEqual(VALID_POST.id);
    expect(result.body).not.toEqual(VALID_POST.body);
    expect(MODULE.client.patch).toHaveBeenCalledTimes(1);
    expect(MODULE.client.patch).toHaveBeenCalledWith(
      `${MODULE.gateway.fullURL}`,
      UPDATE_POST_DATA,
      undefined,
    );
  });
});
