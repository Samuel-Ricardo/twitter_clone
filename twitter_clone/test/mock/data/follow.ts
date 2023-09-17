import { ICreateFollowDTO, IFollowDTO } from '@/app/modules/@core/follow/DTO';
import { generateValidUser } from './user';
import { Follow } from '@/app/modules/@core/follow/entity';
import { randomID } from '@test/util/mongo';

export const USER_FOLLOWED = generateValidUser();
export const USER_FOLLOWER = generateValidUser();

export const CREATE_FOLLOW_DATA: ICreateFollowDTO = {
  followingId: USER_FOLLOWED.id,
  followerId: USER_FOLLOWER.id,
};

export const FOLLOW_DATA: IFollowDTO = {
  ...CREATE_FOLLOW_DATA,
  id: randomID(),
  createdAt: new Date(),
};

export const VALID_FOLLOW = Follow.create(FOLLOW_DATA);

export const SWR_POST_LIKE = (data: IFollowDTO | IFollowDTO[]) => ({
  data,
  error: null,
  mutate: () => ({}) as any,
  isLoading: false,
  isValidating: false,
});
