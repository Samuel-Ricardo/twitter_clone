import { injectable } from 'inversify';
import { IDeleteLikeDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

@injectable()
export class DeleteLikeUseCase extends LikeGatewayAccess {
  execute(data: IDeleteLikeDTO) {
    return this.gateway.deleteLike(data);
  }
}
