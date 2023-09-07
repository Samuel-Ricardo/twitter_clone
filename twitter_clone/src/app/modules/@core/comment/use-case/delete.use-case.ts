import { injectable } from 'inversify';
import { IDeleteCommentDTO } from '../DTO';
import { CommentGatewayAccess } from '../gateway';

@injectable()
export class DeleteCommentUseCase extends CommentGatewayAccess {
  async execute(comment: IDeleteCommentDTO) {
    return this.gateway.deleteComment(comment);
  }
}
