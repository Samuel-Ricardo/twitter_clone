import { CommentController } from '@/app/modules/@core/comment/controller/comment.controller';
import { ISimulatedCommentController } from '@test/@types/simulate/comment/controller';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockCommentController = () => mockDeep<CommentController>();

export const simulateCommentController = ({
  container,
}: interfaces.Context): ISimulatedCommentController => {
  const service = container.get<any>(MODULE_MOCK.COMMENT.SERVICE.MOCK);

  return { controller: new CommentController(service), service };
};
