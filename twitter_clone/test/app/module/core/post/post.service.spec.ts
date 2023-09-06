/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { ISimulatedPostService } from '@test/@types/simulate/post';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { expect } from '@jest/globals';
import {
  CREATE_POST_DATA,
  SWR_POST,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_UPDATED_POST,
} from '@test/mock/data/post';
import { VALID_USER } from '@test/mock/data/user';

describe('[SERVICE] | POST', () => {
  let MODULE: ISimulatedPostService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.POST.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    MODULE.use_case.create.execute.mockResolvedValue(VALID_POST);

    const result = await MODULE.service.create(CREATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_POST);

    expect(MODULE.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.create.execute).toHaveBeenCalledWith(
      CREATE_POST_DATA,
    );
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    MODULE.use_case.update.execute.mockResolvedValue(VALID_UPDATED_POST);

    const result = await MODULE.service.update(UPDATE_POST_DATA);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(VALID_UPDATED_POST);

    expect(result.id).toEqual(VALID_POST.id);
    expect(result.body).not.toEqual(VALID_POST.body);

    expect(MODULE.use_case.update.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.update.execute).toHaveBeenCalledWith(
      UPDATE_POST_DATA,
    );
  });

  it('[UNIT] | Should: delete => [POST]', async () => {
    MODULE.use_case.deletePost.execute.mockResolvedValue();

    expect(MODULE.service.delete({ id: VALID_POST.id })).resolves.not.toThrow();
    expect(MODULE.use_case.deletePost.execute).toHaveBeenCalledTimes(1);
  });

  it('[UNIT] | Should: find [all] => [POST]', async () => {
    MODULE.use_case.find.all.execute.mockReturnValue(
      SWR_POST([VALID_POST.toStruct()]) as any,
    );

    const result = MODULE.service.findAll();

    expect(result).toBeDefined();
    expect(JSON.stringify(result.data![0])).toStrictEqual(
      JSON.stringify(VALID_POST.toStruct()),
    );

    expect(MODULE.use_case.find.all.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.all.execute).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: find by [id] => [POST]', async () => {
    MODULE.use_case.find.by.id.execute.mockReturnValue(
      SWR_POST(VALID_POST.toStruct()) as any,
    );

    const result = MODULE.service.findById({ id: VALID_POST.id });

    expect(result).toBeDefined();
    expect(JSON.stringify(result.data)).toEqual(
      JSON.stringify(VALID_POST.toStruct()),
    );

    expect(MODULE.use_case.find.by.id.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.id.execute).toHaveBeenCalledWith({
      id: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: find by [author] => [POST]', async () => {
    MODULE.use_case.find.by.author.execute.mockReturnValue(
      SWR_POST([VALID_POST.toStruct()]) as any,
    );

    const result = MODULE.service.findByAuthor({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(JSON.stringify(result.data)).toEqual(
      JSON.stringify([VALID_POST.toStruct()]),
    );
    expect(result.data![0].authorId).toEqual(VALID_USER.id);

    expect(MODULE.use_case.find.by.author.execute).toHaveBeenCalledTimes(1);
    expect(MODULE.use_case.find.by.author.execute).toHaveBeenCalledWith({
      id: VALID_USER.id,
    });
  });
});
