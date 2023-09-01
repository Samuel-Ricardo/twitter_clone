import { ISelectUserByIdDTO } from '../DTO';
import { UserGatewayAccess } from '../gateway';

export class SelectUserByIdUseCase extends UserGatewayAccess {
  async execute(data: ISelectUserByIdDTO) {
    return this.gateway.selectById(data);
  }
}
