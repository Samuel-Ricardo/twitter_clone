import { injectable } from 'inversify';
import { CommentGatewayAccess } from '../gateway';
import { IFindCommentByIDDTO } from '../DTO/get_by_id.dto';

@injectable()
export class FindCommentByIDUseCase extends CommentGatewayAccess {
  async execute({ id }: IFindCommentByIDDTO) {
    return this.gateway.findById({ id });
  }
}
