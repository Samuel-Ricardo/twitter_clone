import { injectable } from 'inversify';
import { UserGatewayAccess } from '../gateway';
import { ISelectUserByEmailDTO } from '../DTO/select_by_email.dto';

@injectable()
export class SelectUserByEmailUseCase extends UserGatewayAccess {
  execute(user: ISelectUserByEmailDTO) {
    return this.gateway.selectByEmail(user);
  }
}
