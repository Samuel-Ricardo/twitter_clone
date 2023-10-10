import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type IFollowObservable } from './follow.observable';

@injectable()
export abstract class FollowObservableSupport {
  constructor(
    @inject(MODULE.OBSERVABLE.NODE.FOLLOW)
    protected observable: IFollowObservable,
  ) {}
}
