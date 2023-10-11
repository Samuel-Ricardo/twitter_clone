import { inject, injectable, tagged } from 'inversify';
import { ReactiveCommentService } from '../../service/reactive/comment.service';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '../../../notification/notification.tag';
import { IEmitCommentDTO } from '../../DTO/observable/emit/created.dto';
import { IListenCommentDTO } from '../../DTO/observable/listen/created.dto';

@injectable()
export class ReactiveCommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveCommentService,
  ) {}

  async emitComment(comment: IEmitCommentDTO) {
    return this.service.emitComment(comment);
  }

  async onComment(schedule: IListenCommentDTO) {
    return this.service.listenComment(schedule);
  }
}
