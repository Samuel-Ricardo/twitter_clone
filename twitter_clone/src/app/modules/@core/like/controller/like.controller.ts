import { inject, injectable } from 'inversify';
import { LikeService } from '../service';
import { MODULE } from '@/app/modules/app.registry';
import {
  ICreateLikeDTO,
  IDeleteLikeDTO,
  IFindCommentLikesDTO,
  IFindPostLikesDTO,
  IFindUserLikesDTO,
} from '../DTO';

@injectable()
export class LikeController {
  constructor(
    @inject(MODULE.LIKE.SERVICE)
    private readonly service: LikeService,
  ) {}

  async create(like: ICreateLikeDTO) {
    return { like: (await this.service.create(like)).toStruct() };
  }

  async dislike(like: IDeleteLikeDTO) {
    return await this.service.delete(like);
  }

  getTweetLikes(tweet: IFindPostLikesDTO) {
    return { likes: this.service.findByPost(tweet) };
  }

  getUserLikes(user: IFindUserLikesDTO) {
    return { likes: this.service.findByUser(user) };
  }

  getCommentLikes(coment: IFindCommentLikesDTO) {
    return { likes: this.service.findByComment(coment) };
  }
}
