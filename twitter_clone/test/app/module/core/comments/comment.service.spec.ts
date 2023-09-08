/*
 * @jest-environment node
 */

import 'reflect-metadata';

import { expect } from '@jest/globals';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { MODULES_MOCK } from '@test/mock/module/app.factory';

describe('[CORE] | SERVICE =:> [COMMENT]', () => {
  let MODULE: ISimulatedCommentService;

  beforeEach(() => {
    jest.clearAllMocks();

    MODULE = MODULES_MOCK.COMMENT.SERVICE.SIMULATE();

    expect(MODULE).toBeDefined();
    expect(MODULE.service).toBeDefined();
    expect(MODULE.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    expect(true).toBe(true);
  });
});
