import { ICreateLikeDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

export class CreateLikeUseCase extends LikeGatewayAccess {
  async execute(like: ICreateLikeDTO) {
    return this.gateway.create(like);
  }
}
