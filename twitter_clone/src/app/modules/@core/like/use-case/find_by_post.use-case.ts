import { IFindPostLikesDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

export class FindPostLikesUseCase extends LikeGatewayAccess {
  execute(post: IFindPostLikesDTO) {
    return this.gateway.swrFindPostLikes(post);
  }
}
