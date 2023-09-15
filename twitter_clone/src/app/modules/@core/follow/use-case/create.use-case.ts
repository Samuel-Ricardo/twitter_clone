import { ICreateFollowDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

export class CreateFollowUseCase extends FollowGatewayAccess {
  async execute(follow: ICreateFollowDTO) {
    return await this.gateway.create(follow);
  }
}
