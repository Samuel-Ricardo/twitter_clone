import { inject, injectable } from 'inversify';
import { EmitCommentUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenCommentUseCase } from '../../use-case/observable/listen/created.use-case';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export class ReactiveCommentService {
  constructor(
    @inject(MODULE.COMMENT.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitCommentUseCase: EmitCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenCommentUseCase: ListenCommentUseCase,
  ) {}
}
