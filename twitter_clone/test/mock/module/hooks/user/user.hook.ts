import { useSession } from './session.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useUsers } from '@/app/hooks/user/all.hook';
import { useUser } from '@/app/hooks/user/one.hook';

import { interfaces } from 'inversify';
import { MODULES } from '@/app/modules';
import { MODULE_MOCK } from '../../app.registry';

import { ISimulatedUserHooks } from '@test/@types/simulate/user/hooks';
import { MockedUseSession } from '@test/@types/hooks/user/session';

jest.mock('../../../../../src/app/modules/@core/user/user.factory.ts');
export { MODULES, useSession, useUsers, useCurrentUser, useUser };

export const simulateUserHooks = ({
  container,
}: interfaces.Context): ISimulatedUserHooks => {
  const controller = container.get<any>(MODULE_MOCK.USER.CONTROLLER.MOCK);

  (MODULES.USER.MAIN as jest.Mock).mockReturnValue(controller);

  return {
    all: useUsers,
    one: useUser,
    current: useCurrentUser,
    session: useSession as MockedUseSession,
    controller,
  };
};
