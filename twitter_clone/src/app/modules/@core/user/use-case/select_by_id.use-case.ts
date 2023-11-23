import { ISelectUserByIdDTO } from '../DTO';
import { UserGatewayAccess } from '../gateway';

export class SelectUserByIdUseCase extends UserGatewayAccess {
  async executeAsync(user: ISelectUserByIdDTO) {
    return await this.gateway.selectById(user);
  }
  execute(user: ISelectUserByIdDTO) {
    return this.gateway.swrSelectById(user);
  }
}
