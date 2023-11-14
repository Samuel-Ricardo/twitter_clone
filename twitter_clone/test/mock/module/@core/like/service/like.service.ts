import { LikeService } from '@/app/modules/@core/like/service';
import { mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { MODULE_MOCK } from '@test/mock/module/app.registry';
import { ISimulatedLikeService } from '@test/@types/simulate/like/service';

export const mockLikeService = () => mockDeep<LikeService>();

export const simulateLikeService = ({
  container,
}: interfaces.Context): ISimulatedLikeService => {
  const create = container.get<any>(MODULE_MOCK.LIKE.USE_CASE.CREATE);
  const deleteLike = container.get<any>(MODULE_MOCK.LIKE.USE_CASE.DELETE);
  const post = container.get<any>(MODULE_MOCK.LIKE.USE_CASE.FIND.BY.POST);
  const user = container.get<any>(MODULE_MOCK.LIKE.USE_CASE.FIND.BY.USER);
  const comment = container.get<any>(MODULE_MOCK.LIKE.USE_CASE.FIND.BY.COMMENT);
  const created = container.get<any>(
    MODULE_MOCK.LIKE.USE_CASE.OBSERVABLE.EMIT.CREATED,
  );
  const deleted = container.get<any>(
    MODULE_MOCK.LIKE.USE_CASE.OBSERVABLE.EMIT.DELETED,
  );

  const service = new LikeService(
    create,
    deleteLike,
    user,
    comment,
    post,
    created,
    deleted,
  );

  return {
    service,
    use_case: {
      create,
      deleteLike,
      find: {
        by: {
          post,
          user,
          comment,
        },
      },
      observable: {
        emit: {
          created,
          deleted,
        },
      },
    },
  };
};
