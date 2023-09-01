import { injectable } from 'inversify';
import { UserGatewayAccess } from '../gateway';
import { IUpdateUserDTO } from '../DTO';

@injectable()
export class UpdateUserUseCase extends UserGatewayAccess {
  async execute(data: IUpdateUserDTO) {
    return this.gateway.update(data);
  }
}
