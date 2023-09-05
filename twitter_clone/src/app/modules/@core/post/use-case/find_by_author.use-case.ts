import { injectable } from 'inversify';
import { IFindPostByAuthorIdDTO } from '../DTO';
import { PostGatewayAccess } from '../gateway';

@injectable()
export class FindPostsByAuthorUseCase extends PostGatewayAccess {
  async execute(data: IFindPostByAuthorIdDTO) {
    return this.gateway.swrFindByAuthor(data);
  }
}
