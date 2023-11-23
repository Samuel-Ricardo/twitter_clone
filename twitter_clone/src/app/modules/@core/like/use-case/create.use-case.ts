import { injectable } from 'inversify';
import { ICreateLikeDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

@injectable()
export class CreateLikeUseCase extends LikeGatewayAccess {
  async execute({ userId, likedId }: ICreateLikeDTO) {
    return this.gateway.create({ userId, likedId });
  }
}
