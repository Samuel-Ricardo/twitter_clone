import { inject, injectable } from 'inversify';
import { type IFollowGateway } from './follow.gateway';
import { MODULE } from '@/app/modules';

@injectable()
export abstract class FollowGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.FOLLOW)
    private readonly gateway: IFollowGateway,
  ) {}
}
