import { ISimulatedUseCurrentUserHook } from '@test/@types/simulate/user/hooks/current';
import { interfaces } from 'inversify';
import { mockFn } from 'jest-mock-extended';
import { useCurrentUser } from '../../../../../src/app/hooks/user/current.hook';
import { ISimulatedUserHooks } from '@test/@types/simulate/user/hooks';
import { MODULE_MOCK } from '../../app.registry';

export const mockUseCurrentUser = () => mockFn<typeof useCurrentUser>();

export const simulateUseCurrentUser = ({
  container,
}: interfaces.Context): ISimulatedUseCurrentUserHook => {
  const { current, session, controller } = container.get<ISimulatedUserHooks>(
    MODULE_MOCK.HOOKS.USER.SIMULATE,
  );
  return { hook: current, session, controller };
};
