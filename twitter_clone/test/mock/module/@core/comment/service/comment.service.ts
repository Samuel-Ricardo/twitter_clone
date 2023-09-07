import { CommentService } from '@/app/modules/@core/comment/service/comment.service';
import { ISimulatedCommentService } from '@test/@types/simulate/comment/service';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockCommentService = () => mockDeep<CommentService>();

export const simulateCommentService = ({
  container,
}: interfaces.Context): ISimulatedCommentService => {
  const create = container.get<any>(MODULE_MOCK.COMMENT.USE_CASE.CREATE);
  const update = container.get<any>(MODULE_MOCK.COMMENT.USE_CASE.UPDATE);
  const deleteComment = container.get<any>(MODULE_MOCK.COMMENT.USE_CASE.DELETE);
  const post = container.get<any>(MODULE_MOCK.COMMENT.USE_CASE.FIND.BY.POST);
  const author = container.get<any>(
    MODULE_MOCK.COMMENT.USE_CASE.FIND.BY.AUTHOR,
  );

  const service = new CommentService(
    create,
    deleteComment,
    post,
    author,
    update,
  );

  return {
    service,
    use_case: {
      create,
      update,
      deleteComment,
      find: {
        by: {
          post,
          author,
        },
      },
    },
  };
};
