import { inject, injectable } from 'inversify';
import { EmitCommentUseCase } from '../../use-case/observable/emit/created.use-case';
import { ListenCommentUseCase } from '../../use-case/observable/listen/created.use-case';
import { MODULE } from '@/app/modules/app.registry';
import { IEmitCommentDTO } from '../../DTO/observable/emit/created.dto';
import { IListenCommentDTO } from '../../DTO/observable/listen/created.dto';

@injectable()
export class ReactiveCommentService {
  constructor(
    @inject(MODULE.COMMENT.USE_CASE.OBSERVABLE.EMIT.CREATED)
    private readonly emitCommentUseCase: EmitCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.OBSERVABLE.LISTEN.CREATED)
    private readonly listenCommentUseCase: ListenCommentUseCase,
  ) {}

  emitComment(comment: IEmitCommentDTO) {
    return this.emitCommentUseCase.executeAsync(comment);
  }

  listenComment({ scheduled }: { scheduled: IListenCommentDTO }) {
    return this.listenCommentUseCase.executeAsync(scheduled);
  }
}
