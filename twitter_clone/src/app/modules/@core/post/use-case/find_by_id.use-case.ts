import { injectable } from 'inversify';
import { IFindPostByIdDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class FindPostByIdUseCase extends PostGatewayAccess {
  async executeAsync(id: IFindPostByIdDTO) {
    return this.gateway.findById(id);
  }
  execute(data: IFindPostByIdDTO) {
    return this.gateway.swrFindById(data);
  }
}
