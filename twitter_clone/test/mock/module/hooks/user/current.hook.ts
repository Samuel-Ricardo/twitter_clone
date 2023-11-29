import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { ISimulatedUseCurrentUserHook } from '@test/@types/simulate/user/hooks/current';
import { interfaces } from 'inversify';
import { mockFn } from 'jest-mock-extended';
import { MODULES } from '../../../../../src/app/modules/app.factory';
import { useSession } from './session.hook';
import { MODULE_MOCK } from '../../app.registry';
import { MockedUseSession } from '@test/@types/hooks/user/session';

jest.mock('../../../../../src/app/modules/@core/user/user.factory.ts');

export { useCurrentUser, useSession, MODULES };

export const mockUseCurrentUser = () => mockFn<typeof useCurrentUser>();

export const simulateUseCurrentUser = ({
  container,
}: interfaces.Context): ISimulatedUseCurrentUserHook => {
  const controller = container.get<any>(MODULE_MOCK.USER.CONTROLLER.MOCK);

  (MODULES.USER.MAIN as jest.Mock).mockReturnValue(controller);

  return {
    hook: useCurrentUser,
    session: useSession as MockedUseSession,
    controller,
  };
};
