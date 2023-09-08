import { injectable } from 'inversify';
import { ICreateLikeDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

@injectable()
export class CreateLikeUseCase extends LikeGatewayAccess {
  async execute(like: ICreateLikeDTO) {
    return this.gateway.create(like);
  }
}
