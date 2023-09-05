import { IFindPostByIdDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

export class FindPostByIdUseCase extends PostGatewayAccess {
  async execute(data: IFindPostByIdDTO) {
    return this.gateway.findById(data);
  }
}
