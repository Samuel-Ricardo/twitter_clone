import { injectable } from 'inversify';
import { CommentGatewayAccess } from '../gateway';
import { IFindPostCommentsDTO } from '../DTO';

@injectable()
export class FindPostCommentsUseCase extends CommentGatewayAccess {
  execute(post: IFindPostCommentsDTO) {
    return this.gateway.swrFindByPost(post);
  }
}
