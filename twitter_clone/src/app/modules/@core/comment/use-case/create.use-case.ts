import { injectable } from 'inversify';
import { CommentGatewayAccess } from '../gateway';
import { ICreateCommentDTO } from '../DTO';

@injectable()
export class CreateCommentUseCase extends CommentGatewayAccess {
  async execute(comment: ICreateCommentDTO) {
    return this.gateway.create(comment);
  }
}
