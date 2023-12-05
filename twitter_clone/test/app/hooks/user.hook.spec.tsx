import 'reflect-metadata';

import { MODULES, useUsers } from '@test/mock/module/hooks/user/user.hook';
import { expect } from '@jest/globals';

import { renderHook } from '@testing-library/react-hooks';
import { MODULES_MOCK } from '@test/mock/module/app.factory';
import {
  AUTHENTICATED_SESSION,
  MUTATION,
  SWR_USER,
  SWR_USERS,
  USER_DATA,
} from '@test/mock/data/react/user';
import { ISimulatedUserHooks } from '@test/@types/simulate/user/hooks';

describe('[HOOK] | USER', () => {
  let MODULE: ISimulatedUserHooks;

  beforeEach(() => {
    jest.clearAllMocks();
    MODULE = MODULES_MOCK.HOOKS.USER.SIMULATE();
  });

  it('[UNIT] | [HOOK] - Should: edit => [USER]', async () => {
    const updated = { ...USER_DATA, name: 'updated' };

    const mutation = MUTATION(
      { user: updated },
      { execute: MODULE.controller.update },
    );

    MODULE.mutation.mockReturnValue(mutation as any);
    MODULE.controller.update.mockResolvedValue({ user: updated });

    const { result } = renderHook(() => MODULE.mutate.create());

    result.current.create({ ...updated });
    await result.current.createAsync({ ...updated });

    expect(MODULE.controller.update).toHaveBeenCalledTimes(2);
    expect(MODULE.controller.update).toHaveBeenCalledWith({ ...updated });

    expect(MODULE.mutation).toHaveBeenCalledTimes(1);

    expect(mutation.mutate).toHaveBeenCalledTimes(1);
    expect(mutation.mutate).toHaveBeenCalledWith({ ...updated });

    expect(mutation.mutateAsync).toHaveBeenCalledTimes(1);
    expect(mutation.mutateAsync).toHaveBeenCalledWith({ ...updated });

    expect(result.current).toBeDefined();
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.user).toStrictEqual(updated);
  });

  it('[UNIT] | [HOOK] - Should: create => [USER]', async () => {
    const mutation = MUTATION(
      { user: USER_DATA },
      { execute: MODULE.controller.create },
    );

    MODULE.controller.create.mockResolvedValue({ user: USER_DATA });
    MODULE.mutation.mockReturnValue(mutation as any);

    const { result } = renderHook(() => MODULE.mutate.create());

    result.current.create({ ...USER_DATA });
    await result.current.createAsync({ ...USER_DATA });

    expect(MODULE.controller.create).toHaveBeenCalledTimes(2);
    expect(MODULE.controller.create).toHaveBeenCalledWith({ ...USER_DATA });

    expect(MODULE.mutation).toHaveBeenCalledTimes(1);

    expect(mutation.mutate).toHaveBeenCalledTimes(1);
    expect(mutation.mutate).toHaveBeenCalledWith({ ...USER_DATA });

    expect(mutation.mutateAsync).toHaveBeenCalledTimes(1);
    expect(mutation.mutateAsync).toHaveBeenCalledWith({ ...USER_DATA });

    expect(result.current).toBeDefined();
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.user).toStrictEqual(USER_DATA);
  });

  it('[UNIT] | [HOOK] - Should: find [one] => [USER]', async () => {
    MODULE.controller.selectById.mockReturnValue(SWR_USER(USER_DATA) as any);

    const { result } = renderHook(() => MODULE.one({ id: USER_DATA.id }));

    expect(MODULE.controller.selectById).toHaveBeenCalledTimes(1);
    expect(MODULE.controller.selectById).toHaveBeenCalledWith({
      id: USER_DATA.id,
    });

    expect(result.current.data).toBeDefined();
    expect(result.current.data).toStrictEqual(USER_DATA);
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
