import { injectable } from 'inversify';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class FindAllPostUseCase extends PostGatewayAccess {
  execute() {
    return this.gateway.swrListAll();
  }
}
