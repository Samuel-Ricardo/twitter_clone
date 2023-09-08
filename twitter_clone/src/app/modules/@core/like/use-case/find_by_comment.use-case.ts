import { injectable } from 'inversify';
import { IFindCommentLikesDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

@injectable()
export class FindCommentLikesUseCase extends LikeGatewayAccess {
  execute(comment: IFindCommentLikesDTO) {
    return this.gateway.swrFindCommentLikes(comment);
  }
}
