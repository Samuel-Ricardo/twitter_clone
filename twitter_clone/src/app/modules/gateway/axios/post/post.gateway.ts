import { IPostGateway } from '@/app/modules/@core/post/gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import { injectable } from 'inversify';
import {
  ICreatePostDTO,
  IUpdatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IPostDTO,
} from '@/app/modules/@core/post/DTO';
import { CreatePostSchema } from '@/app/modules/@core/post/validator/schema';
import { Post } from '@/app/modules/@core/post/entity';

@injectable()
export class AxiosPostGateway extends AxiosHTTPGateway implements IPostGateway {
  readonly prefix = 'posts';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(post: ICreatePostDTO) {
    CreatePostSchema.parse(post);

    const response = await this.post<{ post: IPostDTO }>(this.prefix, post);
    return Post.create(response.data.post);
  }

  async findAll() {
    const response = await this.get<{ posts: IPostDTO[] }>(this.prefix);
    return Post.createArray(response.data.posts);
  }
}
