import { ILikeGateway } from '@/app/modules/@core/like/gateway/like.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import {
  ICreateLikeDTO,
  IDeleteLikeDTO,
  IFindCommentLikesDTO,
  IFindPostLikesDTO,
  IFindUserLikesDTO,
  ILikeDTO,
} from '@/app/modules/@core/like/DTO';
import { Like } from '../../../@core/like/entity';

export class AxiosLikeGateway extends AxiosHTTPGateway implements ILikeGateway {
  readonly prefix = 'likes';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(like: ICreateLikeDTO) {
    const result = await this.post<{ like: ILikeDTO }>(this.prefix, like);

    return Like.create(result.data.like);
  }

  async deleteLike(like: IDeleteLikeDTO) {
    await this.delete(`${this.prefix}/${like.id}`);
  }

  async findPostLikes(post: IFindPostLikesDTO) {
    const result = await this.get<{ likes: ILikeDTO[] }>(
      `${this.prefix}/post/${post.likedId}`,
    );

    return Like.createArray(result.data.likes);
  }

  async findCommentLikes(comment: IFindCommentLikesDTO) {
    const result = await this.get<{ likes: ILikeDTO[] }>(
      `${this.prefix}/comment/${comment.likedId}`,
    );

    return Like.createArray(result.data.likes);
  }

  async findUserLikes({ userId }: IFindUserLikesDTO) {
    const result = await this.get<{ likes: ILikeDTO[] }>(
      `${this.prefix}/user/${userId}`,
    );

    return Like.createArray(result.data.likes);
  }

  swrFindPostLikes({ likedId }: IFindPostLikesDTO) {
    return this.useSWR<ILikeDTO[]>(`${this.fullURL}/${likedId}`);
  }

  swrFindCommentLikes({ likedId }: IFindCommentLikesDTO) {
    return this.useSWR<ILikeDTO[]>(`${this.fullURL}/${likedId}`);
  }

  swrFindUserLikes({ userId }: IFindUserLikesDTO) {
    return this.useSWR<ILikeDTO[]>(`${this.fullURL}/${userId}`);
  }
}
