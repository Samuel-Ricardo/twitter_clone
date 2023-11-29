import { ISimulatedUserHooks } from '@test/@types/simulate/user/hooks';
import { interfaces } from 'inversify';
import { MODULES_MOCK } from '../../app.factory';

export const simulateUserHooks = ({
  container,
}: interfaces.Context): ISimulatedUserHooks => ({
  all: container.get<any>(MODULES_MOCK.HOOKS.USER.ALL.SIMULATE),
  current: container.get<any>(MODULES_MOCK.HOOKS.USER.CURRENT.SIMULATE),
});
