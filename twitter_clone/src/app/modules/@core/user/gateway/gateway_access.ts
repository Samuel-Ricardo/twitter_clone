import { inject, injectable } from 'inversify';
import type { IUserGateway } from './user.gateway';
import { MODULE } from '@/app/modules/app.registry';

@injectable()
export abstract class UserGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.USER)
    protected readonly gateway: IUserGateway,
  ) {}
}
