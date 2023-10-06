import { inject, injectable } from 'inversify';
import { type ILikeObservable } from './like.observable';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class LikeObservableSupport {
  constructor(
    @inject(MODULE.OBSERVABLE.NODE.LIKE)
    protected readonly observable: ILikeObservable,
  ) {}
}
