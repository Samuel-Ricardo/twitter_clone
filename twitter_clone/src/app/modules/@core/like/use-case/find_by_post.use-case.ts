import { injectable } from 'inversify';
import { IFindPostLikesDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

@injectable()
export class FindPostLikesUseCase extends LikeGatewayAccess {
  execute(post: IFindPostLikesDTO) {
    return this.gateway.swrFindPostLikes(post);
  }
}
