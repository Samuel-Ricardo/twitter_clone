import { injectable } from 'inversify';
import { ISelectUserByCredentialsDTO } from '../DTO/select_by_credentials.dto';
import { UserGatewayAccess } from '../gateway';

@injectable()
export class SelectUserByCredentialsUseCase extends UserGatewayAccess {
  execute(user: ISelectUserByCredentialsDTO) {
    return this.gateway.selectByCredentials(user);
  }
}
