import { injectable } from 'inversify';
import { IUpdatePostDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class UpdatePostUseCase extends PostGatewayAccess {
  async execute(post: IUpdatePostDTO) {
    return this.gateway.update(post);
  }
}
