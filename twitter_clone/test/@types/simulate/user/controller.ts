import { UserController } from '@/app/modules/@core/user/controller';
import { UserService } from '@/app/modules/@core/user/service';
import { ISimulatedController } from '../controller';

export interface ISimulatedUserController
  extends ISimulatedController<UserController, UserService> {}
