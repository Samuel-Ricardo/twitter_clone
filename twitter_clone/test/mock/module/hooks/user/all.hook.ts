import { useUsers } from '@/app/hooks/user/all.hook';
import { mockFn } from 'jest-mock-extended';

import { MODULES } from './user.hook';
import { interfaces } from 'inversify';
import { ISimulatedUseUsersHook } from '@test/@types/simulate/user/hooks/all';
import { MODULE_MOCK } from '../../app.registry';

export { useUsers, MODULES };

export const mockUseUsers = () => mockFn<typeof useUsers>();

export const simulateUseUsers = ({
  container,
}: interfaces.Context): ISimulatedUseUsersHook => {
  const controller = container.get<any>(MODULE_MOCK.USER.CONTROLLER.MOCK);

  (MODULES.USER.MAIN as jest.Mock).mockReturnValue(controller);

  return { hook: useUsers, controller };
};
