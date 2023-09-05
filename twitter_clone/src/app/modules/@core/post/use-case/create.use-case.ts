import { injectable } from 'inversify';
import { PostGatewayAccess } from '../gateway';
import { ICreatePostDTO } from '../DTO';

@injectable()
export class CreatePostUseCase extends PostGatewayAccess {
  async execute(post: ICreatePostDTO) {
    return this.gateway.create(post);
  }
}
