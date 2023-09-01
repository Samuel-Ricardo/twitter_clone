import { ISelectUserByIdDTO } from '../DTO';
import { UserGatewayAccess } from '../gateway';

export class SelectUserByIdUseCase extends UserGatewayAccess {
  async execute(user: ISelectUserByIdDTO) {
    return this.gateway.swrSelectById(user);
  }
}
