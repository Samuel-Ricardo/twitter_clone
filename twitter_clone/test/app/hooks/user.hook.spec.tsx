import 'reflect-metadata';

import { MODULES, useUsers } from '@test/mock/module/hooks/user/user.hook';
import { expect } from '@jest/globals';

import { renderHook } from '@testing-library/react-hooks';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  AUTHENTICATED_SESSION,
  SWR_USER,
  SWR_USERS,
  USER_DATA,
} from '@test/mock/data/react/user';
import { ISimulatedUserHooks } from '@test/@types/simulate/user/hooks';

describe('[HOOK] | USER', () => {
  let MODULE: ISimulatedUserHooks;

  beforeEach(() => {
    MODULE = MODULES_MOCK.HOOKS.USER.SIMULATE();
  });

  it('[UNIT] | [HOOK] - Should: find [current] => [USER]', async () => {
    MODULE.controller.selectByEmail.mockReturnValue(SWR_USER(USER_DATA) as any);
    MODULE.session.mockReturnValue(AUTHENTICATED_SESSION as any);

    const { result } = renderHook(() => MODULE.current());

    expect(MODULE.session).toHaveBeenCalledTimes(1);
    expect(MODULE.session).toHaveBeenCalledWith();

    expect(MODULE.controller.selectByEmail).toHaveBeenCalledTimes(1);
    expect(MODULE.controller.selectByEmail).toHaveBeenCalledWith({
      email: USER_DATA.email,
    });

    expect(result.current).toBeDefined();

    expect(result.current.result.data).toBeDefined();
    expect(result.current.result.data).toStrictEqual(USER_DATA);

    expect(result.current.status).toBe('authenticated');
  });

  it('[UNIT] | [HOOK] - Should: list [all] => [USER]', async () => {
    MODULE.controller.listAll.mockReturnValue(SWR_USERS([USER_DATA]) as any);

    const { result } = renderHook(() => MODULE.all());
    const { data } = result.current;

    expect(MODULE.controller.listAll).toHaveBeenCalledTimes(1);
    expect(MODULE.controller.listAll).toHaveBeenCalledWith();

    expect(result.current).toBeDefined();
    expect(result.current.data).toBeDefined();

    expect(data).toBeDefined();
    expect(data).toStrictEqual([USER_DATA]);
  });

  it('[UNIT] | [HOOK] - Should: list [all] => [USER]', async () => {
    MODULES.USER.MAIN.mockReturnValue({
      listAll: jest.fn(),
    });

    const USER_DATA = {
      name: 'pedro',
      username: 'p3dr0',
      email: 'pedro@email.com',
      password: 'h3j2f6',
      id: '123',
      bio: 'Hello World! :D',
      hasNotifications: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    MODULES.USER.MAIN().listAll.mockReturnValue({
      users: {
        data: [USER_DATA],
        error: null,
        mutate: () => ({}) as any,
        isLoading: false,
        isValidating: false,
      },
    });

    const { result } = renderHook(() => useUsers());
    const { data, isLoading, error } = result.current;

    expect(MODULES.USER.MAIN().listAll).toHaveBeenCalled();

    expect(result.current).toBeDefined();

    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThanOrEqual(0);
  });
});
