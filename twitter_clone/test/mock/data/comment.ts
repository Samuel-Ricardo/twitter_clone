import { VALID_USER } from './user';
import { VALID_POST } from './post';
import { randomID } from '../../util/mongo';
import {
  ICommentDTO,
  ICreateCommentDTO,
  IUpdateCommentDTO,
} from '@/app/modules/@core/comment/DTO';
import { Comment } from '@/app/modules/@core/comment/entity';

export const CREATE_POST_COMMENT_DATA: ICreateCommentDTO = {
  body: 'Hello World Comment! :D',
  postId: VALID_POST.id,
  authorId: VALID_USER.id,
};

export const VALID_POST_COMMENT_DATA: ICommentDTO = {
  ...CREATE_POST_COMMENT_DATA,
  id: randomID(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_POST_COMMENT = Comment.create(VALID_POST_COMMENT_DATA);

export const UPDATE_POST_COMMENT_DATA: IUpdateCommentDTO = {
  id: VALID_POST_COMMENT.id,
  body: 'UPDATED Hello World Comment! :D',
};

const UPDATE_POST_COMMENT = Comment.create(VALID_POST_COMMENT_DATA);
UPDATE_POST_COMMENT.body = UPDATE_POST_COMMENT_DATA.body;

export { UPDATE_POST_COMMENT };

export const SWR_POST_COMMENT = (data: ICommentDTO | ICommentDTO[]) => ({
  data,
  error: null,
  mutate: () => ({}) as any,
  isLoading: false,
  isValidating: false,
});
