/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedPostController } from '@test/@types/simulate/post';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import { CREATE_POST_DATA, SWR_POST, VALID_POST } from '@test/mock/data/post';

describe('[CONTROLLER] | @CORE => [POST]', () => {
  let MODULE: ISimulatedPostController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.POST.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_POST);

    const result = await MODULE.controller.create(CREATE_POST_DATA);

    expect(result).toStrictEqual({ post: VALID_POST.toStruct() });
    expect(MODULE.service.create).toHaveBeenCalledTimes(1);
    expect(MODULE.service.create).toHaveBeenCalledWith(CREATE_POST_DATA);
  });

  it('[UNIT] | Should: find [all] => [POST]', async () => {
    MODULE.service.findAll.mockReturnValue(
      SWR_POST([VALID_POST.toStruct()]) as any,
    );

    const result = MODULE.controller.findAll();

    expect(JSON.stringify(result.posts.data!)).toStrictEqual(
      JSON.stringify([VALID_POST.toStruct()]),
    );

    expect(MODULE.service.findAll).toHaveBeenCalledTimes(1);
    expect(MODULE.service.findAll).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: find by [id] => [POST]', async () => {
    MODULE.service.findById.mockReturnValue(
      SWR_POST(VALID_POST.toStruct()) as any,
    );

    const result = MODULE.controller.findById({ id: VALID_POST.id });

    expect(result.post.data).toStrictEqual(VALID_POST.toStruct());
    expect(MODULE.service.findById).toHaveBeenCalledTimes(1);
    expect(MODULE.service.findById).toHaveBeenCalledWith({ id: VALID_POST.id });
  });
});
