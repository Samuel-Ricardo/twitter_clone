import { MODULE } from '@/app/modules';
import { inject, injectable } from 'inversify';
import {
  CreatePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  DeletePostUseCase,
  UpdatePostUseCase,
  FindPostsByAuthorUseCase,
} from '../use-case';
import {
  ICreatePostDTO,
  IDeletePostDTO,
  IUpdatePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
} from '../DTO';

@injectable()
export class PostService {
  constructor(
    @inject(MODULE.POST.USE_CASE.CREATE)
    private readonly createPost: CreatePostUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.ALL)
    private readonly findAllPost: FindAllPostUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.BY.ID)
    private readonly findPostById: FindPostByIdUseCase,
    @inject(MODULE.POST.USE_CASE.DELETE)
    private readonly deletePost: DeletePostUseCase,
    @inject(MODULE.POST.USE_CASE.UPDATE)
    private readonly updatePost: UpdatePostUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.BY.AUTHOR.ID)
    private readonly findPostsByAuthor: FindPostsByAuthorUseCase,
  ) {}

  async create(post: ICreatePostDTO) {
    return this.createPost.execute(post);
  }

  async update(post: IUpdatePostDTO) {
    return this.updatePost.execute(post);
  }

  async delete(post: IDeletePostDTO) {
    return this.deletePost.execute(post);
  }

  findAll() {
    return this.findAllPost.execute();
  }

  findById(post: IFindPostByIdDTO) {
    return this.findPostById.execute(post);
  }

  findByAuthor(post: IFindPostByAuthorIdDTO) {
    return this.findPostsByAuthor.execute(post);
  }
}
