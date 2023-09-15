import { injectable } from 'inversify';
import { IGetFollowingDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

@injectable()
export class GetFollowingUseCase extends FollowGatewayAccess {
  execute(user: IGetFollowingDTO) {
    return this.gateway.swrGetFollowing(user);
  }
}
