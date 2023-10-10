import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { EmitFollowUseCase } from '../../use-case/observable/emit/created.use-case';
import { EmitUnfollowUseCase } from '../../use-case/observable/emit/deleted.use-case';
import { ListenFollowUseCase } from '../../use-case/observable/listen/created.use-case';
import { ListenUnfollowUseCase } from '../../use-case/observable/listen/deleted.use-case';

@injectable()
export class ReactiveFollowService {
  constructor(
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitFollowEvent: EmitFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.EMIT.DELETED)
    private readonly emitUnfollowEvent: EmitUnfollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenFollow: ListenFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.OBSERVABLE.LISTEN.DELETED)
    private readonly listenUnfollow: ListenUnfollowUseCase,
  ) {}
}
