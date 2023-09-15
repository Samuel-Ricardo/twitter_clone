import { injectable } from 'inversify';
import { IDeleteFollowDTO } from '../DTO';
import { FollowGatewayAccess } from '../gateway/gateway.access';

@injectable()
export class DeleteFollowUseCase extends FollowGatewayAccess {
  async execute(follow: IDeleteFollowDTO) {
    return this.gateway.deleteFollow(follow);
  }
}
