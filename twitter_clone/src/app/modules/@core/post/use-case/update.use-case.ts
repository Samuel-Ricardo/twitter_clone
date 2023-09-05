import { IUpdatePostDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

export class UpdatePostUseCase extends PostGatewayAccess {
  async execute(post: IUpdatePostDTO) {
    return this.gateway.update(post);
  }
}
