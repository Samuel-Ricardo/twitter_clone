import { inject, injectable } from 'inversify';
import { PostService } from '../service';
import { MODULE } from '../../../app.registry';
import {
  ICreatePostDTO,
  IFindPostByAuthorIdDTO,
  IDeletePostDTO,
  IUpdatePostDTO,
  IFindPostByIdDTO,
} from '../DTO';

@injectable()
export class PostController {
  constructor(
    @inject(MODULE.POST.SERVICE)
    private readonly service: PostService,
  ) {}

  async create(post: ICreatePostDTO) {
    const result = await this.service.create(post);
    return { post: result.toStruct() };
  }

  async update(post: IUpdatePostDTO) {
    return { post: (await this.service.update(post)).toStruct() };
  }

  async delete(post: IDeletePostDTO) {
    await this.service.delete(post);
  }

  findAll() {
    return { post: this.service.findAll() };
  }
}
