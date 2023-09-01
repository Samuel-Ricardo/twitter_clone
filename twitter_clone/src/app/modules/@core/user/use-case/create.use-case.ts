import { injectable } from 'inversify';
import { UserGatewayAccess } from '../gateway/gateway_access';
import { ICreateUserDTO } from '../DTO';

@injectable()
export class CreateUserUseCase extends UserGatewayAccess {
  async execute(user: ICreateUserDTO) {
    return this.gateway.create(user);
  }
}
