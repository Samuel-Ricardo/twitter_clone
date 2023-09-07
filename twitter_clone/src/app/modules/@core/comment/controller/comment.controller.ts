import { MODULE } from '@/app/modules/app.registry';
import { inject, injectable } from 'inversify';
import { CommentService } from '../service/comment.service';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    private readonly service: CommentService,
  ) {}
}
