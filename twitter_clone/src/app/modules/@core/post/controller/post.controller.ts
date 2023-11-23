import { inject, injectable, tagged } from 'inversify';
import { PostService } from '../service';
import { MODULE } from '../../../app.registry';
import {
  ICreatePostDTO,
  IFindPostByAuthorIdDTO,
  IDeletePostDTO,
  IUpdatePostDTO,
  IFindPostByIdDTO,
} from '../DTO';
import { SCOPE } from '../../../app.tag';

@injectable()
export class PostController {
  constructor(
    @inject(MODULE.POST.SERVICE)
    @tagged(SCOPE.TAG, SCOPE.MAIN)
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
    return { posts: this.service.findAll() };
  }

  findById(id: IFindPostByIdDTO) {
    return { post: this.service.findById(id) };
  }

  findByAuthor(author: IFindPostByAuthorIdDTO) {
    return { posts: this.service.findByAuthor(author) };
  }

  async findByIdAsync(id: IFindPostByIdDTO) {
    return { post: await this.service.findByIdAsync(id) };
  }
}
