/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentController } from '@test/@types/simulate/comment/controller';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[CORE] | CONTROLLER =:> [COMMENT]', () => {
  let MODULE: ISimulatedCommentController;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.COMMENT.CONTROLLER.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.controller).toBeDefined();
    expect(MODULE.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    MODULE.service.create.mockResolvedValue(VALID_POST_COMMENT);

    const result = await MODULE.controller.create(VALID_POST_COMMENT_DATA);

    expect(result).toBeDefined();
  });
});
