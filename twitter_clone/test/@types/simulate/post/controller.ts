import { PostController, PostService } from '@/app/modules/@core/post';
import { ISimulatedController } from '../controller';

export interface ISimulatedPostController
  extends ISimulatedController<PostController, PostService> {}
