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

  it('[UNIT] | [HOOK] - Should: list [all] => [USER]', async () => {
    MODULE.controller.listAll.mockReturnValue(SWR_USER([USER_DATA]) as any);

    const { result } = renderHook(() => useUsers());
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

    console.log({ MODULES: MODULES.USER.MAIN() });

    MODULES.USER.MAIN().listAll.mockReturnValue({
      users: {
        data: [USER_DATA],
        error: null,
        mutate: () => ({}) as any,
        isLoading: false,
        isValidating: false,
      },
    });

    console.log({ MODULES2: MODULES.USER.MAIN().listAll() });

    const { result } = renderHook(() => useUsers());
    const { data, isLoading, error } = result.current;

    console.log({ data: result.current });

    console.log({ isLoading, error, data });

    expect(MODULES.USER.MAIN().listAll).toHaveBeenCalled();

    expect(result.current).toBeDefined();

    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThanOrEqual(0);
  });
});
