import { PostService } from '@/app/modules/@core/post';
import { ISimulatedPostService } from '@test/@types/simulate/post';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';
import { POST_REGISTRY_MOCK } from '../post.registry';

export const mockPostService = () => mockDeep<PostService>();

export const simulatePostService = ({
  container,
}: interfaces.Context): ISimulatedPostService => {
  const create = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.CREATE);
  const update = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.UPDATE);
  const deletePost = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.DELETE);
  const all = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.FIND.ALL);
  const id = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.FIND.BY.ID);
  const author = container.get<any>(POST_REGISTRY_MOCK.USE_CASE.FIND.BY.AUTHOR);

  const service = new PostService(create, all, id, deletePost, update, author);

  return {
    service,
    use_case: {
      create,
      update,
      deletePost,
      find: {
        all,
        by: {
          id,
          author,
        },
      },
    },
  };
};
