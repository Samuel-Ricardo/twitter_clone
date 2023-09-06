import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { type IPostGateway } from '.';

@injectable()
export class PostGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.POST)
    protected readonly gateway: IPostGateway,
  ) {}
}
