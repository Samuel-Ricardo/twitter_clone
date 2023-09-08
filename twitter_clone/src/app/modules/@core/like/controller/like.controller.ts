import { inject, injectable } from 'inversify';
import { LikeService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import { ICreateLikeDTO } from '../DTO';

@injectable()
export class LikeController {
  constructor(
    @inject(MODULE.LIKE.SERVICE)
    private readonly service: LikeService,
  ) {}

  async create(like: ICreateLikeDTO) {
    return { like: (await this.service.create(like)).toStruct() };
  }
}
