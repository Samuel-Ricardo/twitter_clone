import { IDeleteuserDTO } from '../DTO';
import { UserGatewayAccess } from '../gateway';

export class DeleteUserUseCase extends UserGatewayAccess {
  async execute(data: IDeleteuserDTO) {
    return this.gateway.deleteUser(data);
  }
}
