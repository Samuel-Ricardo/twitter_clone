import { IFindCommentLikesDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

export class FindCommentLikesUseCase extends LikeGatewayAccess {
  execute(comment: IFindCommentLikesDTO) {
    return this.gateway.swrFindCommentLikes(comment);
  }
}
