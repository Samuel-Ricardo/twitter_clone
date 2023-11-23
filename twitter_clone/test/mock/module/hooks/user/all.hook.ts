import { useUsers } from '@/app/hooks/user/all.hook';
import { mockFn } from 'jest-mock-extended';

import { MODULES } from '@/app/modules';
import { interfaces } from 'inversify';
import { ISimulatedUseUsersHook } from '@test/@types/simulate/user/hooks/all';
import { MODULE_MOCK } from '../../app.registry';

jest.mock('../../../../../src/app/modules/@core/user/user.factory.ts');

export { useUsers, MODULES };

export const mockUseUsers = () => mockFn<typeof useUsers>();

export const simulateUseUsers = ({
  container,
}: interfaces.Context): ISimulatedUseUsersHook => {
  const controller = container.get<any>(MODULE_MOCK.USER.CONTROLLER.MOCK);

  (MODULES.USER.MAIN as jest.Mock).mockReturnValue(controller);

  return { hook: useUsers, controller };
};
