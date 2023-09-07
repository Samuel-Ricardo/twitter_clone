import { CommentController } from '@/app/modules/@core/comment/controller/comment.controller';
import { ISimulatedController } from '../controller';
import { CommentService } from '@/app/modules/@core/comment/service/comment.service';

export interface ISimulatedCommentController
  extends ISimulatedController<CommentController, CommentService> {}
