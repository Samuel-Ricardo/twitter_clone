import { UserGatewayAccess } from '../gateway';

export class ListAllUsersUseCase extends UserGatewayAccess {
  async execute() {
    return this.gateway.listAll();
  }
}
