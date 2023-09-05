import { MODULE } from '@/app/modules';
import { inject, injectable } from 'inversify';
import { type IPostGateway } from '.';

@injectable()
export class PostGatewayAccess {
  constructor(
    @inject(MODULE.GATEWAY.AXIOS.POST)
    private readonly gateway: IPostGateway,
  ) {}
}
