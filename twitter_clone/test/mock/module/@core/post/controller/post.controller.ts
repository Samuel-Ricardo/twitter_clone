import { PostController } from '@/app/modules/@core/post';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';
import { POST_REGISTRY_MOCK } from '../post.registry';
import { ISimulatedPostController } from '@test/@types/simulate/post';

export const mockPostController = () => mockDeep<PostController>();

export const simulatePostController = ({
  container,
}: interfaces.Context): ISimulatedPostController => {
  const service = container.get<any>(POST_REGISTRY_MOCK.SERVICE.MOCK);

  return { service, controller: new PostController(service) };
};
