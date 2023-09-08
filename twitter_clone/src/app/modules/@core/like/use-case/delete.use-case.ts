import { IDeleteLikeDTO } from '../DTO';
import { LikeGatewayAccess } from '../gateway';

export class DeleteLikeUseCase extends LikeGatewayAccess {
  execute(data: IDeleteLikeDTO) {
    return this.gateway.deleteLike(data);
  }
}
