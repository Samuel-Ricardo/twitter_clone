import { injectable } from 'inversify';
import { IGetFollowersDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

@injectable()
export class GetFollowersUseCase extends FollowGatewayAccess {
  execute(user: IGetFollowersDTO) {
    return this.gateway.swrGetFollowers(user);
  }
}
