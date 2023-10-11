import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { type IPostObservable } from './post.observable';

@injectable()
export abstract class PostObservableSupport {
  constructor(
    @inject(MODULE.OBSERVABLE.NODE.POST)
    protected readonly nodePostObservable: IPostObservable,
  ) {}
}
