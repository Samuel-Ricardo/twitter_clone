import { injectable } from 'inversify';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class FindAllPostUseCase extends PostGatewayAccess {
  async execute() {
    return this.gateway.findAll();
  }
}
