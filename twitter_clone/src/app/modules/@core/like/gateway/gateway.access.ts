import { inject, injectable } from 'inversify';
import { type ILikeGateway } from './like.gateway';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class LikeGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.LIKE)
    protected readonly gateway: ILikeGateway,
  ) {}
}
