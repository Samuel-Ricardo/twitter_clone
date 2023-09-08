import { IFindUserLikesDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

export class FinduserLikesUseCase extends LikeGatewayAccess {
  execute(user: IFindUserLikesDTO) {
    return this.gateway.swrFindUserLikes(user);
  }
}
