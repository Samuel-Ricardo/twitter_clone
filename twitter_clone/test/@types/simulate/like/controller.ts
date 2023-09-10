import { LikeController } from '@/app/modules/@core/like/controller';
import { ISimulatedController } from '../controller';
import { LikeService } from '@/app/modules/@core/like/service';

export interface ISimulatedLikeController
  extends ISimulatedController<LikeController, LikeService> {}
