import { injectable } from 'inversify';
import { ICountFollowingDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

@injectable()
export class CountFollowingUseCase extends FollowGatewayAccess {
  execute(user: ICountFollowingDTO) {
    return this.gateway.swrCountFollowing(user);
  }
}
