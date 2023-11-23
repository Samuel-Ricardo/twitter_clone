import { inject, injectable } from 'inversify';
import { type IFollowGateway } from './follow.gateway';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class FollowGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.FOLLOW)
    protected readonly gateway: IFollowGateway,
  ) {}
}
