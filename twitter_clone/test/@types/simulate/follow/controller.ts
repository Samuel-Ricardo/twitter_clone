import { FollowController } from '@/app/modules/@core/follow/controller';
import { FollowService } from '@/app/modules/@core/follow/service';
import { ISimulatedController } from '../controller';

export interface ISimulatedFollowController
  extends ISimulatedController<FollowController, FollowService> {}
