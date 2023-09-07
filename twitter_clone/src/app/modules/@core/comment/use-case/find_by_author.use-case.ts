import { IFindAuthorCommentsDTO } from '../DTO';
import { CommentGatewayAccess } from '../gateway';

export class FindUserCommentsUseCase extends CommentGatewayAccess {
  execute(author: IFindAuthorCommentsDTO) {
    return this.gateway.swrFindByAuthor(author);
  }
}
