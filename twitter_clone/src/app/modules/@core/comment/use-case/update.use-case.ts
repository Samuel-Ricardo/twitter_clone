import { injectable } from 'inversify';
import { CommentGatewayAccess } from '../gateway';
import { IUpdateCommentDTO } from '../DTO';

@injectable()
export class UpdateCommentUseCase extends CommentGatewayAccess {
  async execute(comment: IUpdateCommentDTO) {
    return this.gateway.update(comment);
  }
}
