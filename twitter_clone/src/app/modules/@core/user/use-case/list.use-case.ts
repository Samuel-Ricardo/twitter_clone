import { UserGatewayAccess } from '../gateway';

export class ListAllUsersUseCase extends UserGatewayAccess {
  execute() {
    return this.gateway.swrListAll();
  }
}
