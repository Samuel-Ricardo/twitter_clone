import { IDeletePostDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

export class DeletePostUseCase extends PostGatewayAccess {
  async execute(post: IDeletePostDTO) {
    return this.gateway.deletePost(post);
  }
}
