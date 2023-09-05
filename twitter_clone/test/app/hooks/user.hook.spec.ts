import 'reflect-metadata';

import { MODULES, useUsers } from '@test/mock/module/hooks/user/all.hook';
import { expect } from '@jest/globals';

import { renderHook } from '@testing-library/react-hooks';
import { ISimulatedUseUsersHook } from '@test/@types/simulate/user/hooks/all';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import { SWR_USER, USER_DATA } from '@test/mock/data/react/user';

describe('[HOOK] | USER', () => {
  let MODULE: ISimulatedUseUsersHook;

  beforeEach(() => {
    MODULE = MODULES_MOCK.HOOKS.USER.ALL.SIMULATE();
  });

  it('', () => expect(1).toBe(1));
});
