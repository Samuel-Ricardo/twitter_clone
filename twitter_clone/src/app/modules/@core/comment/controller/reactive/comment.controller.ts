import { inject, injectable, tagged } from 'inversify';
import { ReactiveCommentService } from '../../service/reactive/comment.service';
import { MODULE } from '@/app/modules/app.registry';
import { SCOPE } from '../../../notification/notification.tag';

@injectable()
export class ReactiveCommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.REACTIVE)
    private readonly service: ReactiveCommentService,
  ) {}
}
