import { injectable } from 'inversify';
import { ICountFollowersDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

@injectable()
export class CountFollowersUseCase extends FollowGatewayAccess {
  execute(user: ICountFollowersDTO) {
    return this.gateway.swrCountFollowers(user);
  }
}
