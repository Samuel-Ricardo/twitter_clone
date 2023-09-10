import { ICreateLikeDTO, ILikeDTO } from '@/app/modules/@core/like/DTO';
import { Like } from '@/app/modules/@core/like/entity';
import { VALID_USER } from './user';
import { VALID_POST } from './post';
import { randomID } from '@test/util/mongo';

export const CREATE_POST_LIKE_DATA: ICreateLikeDTO = {
  userId: VALID_USER.id,
  likedId: VALID_POST.id,
};

export const VALID_POST_LIKE_DATA: ILikeDTO = {
  ...CREATE_POST_LIKE_DATA,
  id: randomID(),
  createdAt: new Date(),
};

export const VALID_POST_LIKE = Like.create(VALID_POST_LIKE_DATA);
