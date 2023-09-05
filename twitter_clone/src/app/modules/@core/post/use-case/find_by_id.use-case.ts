import { injectable } from 'inversify';
import { IFindPostByIdDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class FindPostByIdUseCase extends PostGatewayAccess {
  execute(data: IFindPostByIdDTO) {
    return this.gateway.swrFindById(data);
  }
}
