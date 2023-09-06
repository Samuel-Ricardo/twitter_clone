import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IUpdatePostDTO,
} from '../DTO';
import { Post } from '../entity';
import { ISWRSupport } from './support';

export interface IPostGateway extends ISWRSupport {
  readonly prefix: 'posts';
  get fullURL(): string;

  create(data: ICreatePostDTO): Promise<Post>;
  findAll(): Promise<Post[]>;
  findById(data: IFindPostByIdDTO): Promise<Post>;
  findByAuhorId(data: IFindPostByAuthorIdDTO): Promise<Post[]>;
  update(data: IUpdatePostDTO): Promise<Post>;
  deletePost(post: IDeletePostDTO): Promise<void>;
}
