import { inject, injectable } from 'inversify';
import type { IUserGateway } from './user.gateway';
import { MODULE } from '@/app/modules/app.registry';
import { injectGateway } from '@/app/modules/gateway/gateway.module';

@injectable()
export abstract class UserGatewayAccess {
  @injectGateway(MODULE.GATEWAY.AXIOS.USER)
  protected readonly gateway: IUserGateway;
}
