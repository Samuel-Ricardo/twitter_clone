import { ILikeGateway } from '@/app/modules/@core/like/gateway/like.gateway';
import { AxiosHTTPGateway } from '../generic/http.gateway';
import {
  ICreateLikeDTO,
  IDeleteLikeDTO,
  IFindPostLikesDTO,
  ILikeDTO,
} from '@/app/modules/@core/like/DTO';
import { Like } from '../../../@core/like/entity';

export class AxiosLikeGateway extends AxiosHTTPGateway implements ILikeGateway {
  readonly prefix = 'likes';

  get fullURL() {
    return `${this.URL}/${this.prefix}`;
  }

  async create(like: ICreateLikeDTO) {
    const result = await this.post<{ like: ILikeDTO }>(this.fullURL, like);

    return Like.create(result.data.like);
  }

  async deleteLike(like: IDeleteLikeDTO) {
    await this.delete(`${this.fullURL}/${like.id}`);
  }

  async findPostLikes(post: IFindPostLikesDTO) {
    const result = await this.get<{ likes: ILikeDTO[] }>(
      `${this.fullURL}/${post.likedId}`,
    );

    return Like.createArray(result.data.likes);
  }
}
