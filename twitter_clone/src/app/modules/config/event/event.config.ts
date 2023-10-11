import { LIKE_EVENTS as LIKE } from '../../@core/like/observable/observable.config';
import { NOTIFICATION_EVENTS as NOTIFICATION } from '../../@core/notification/observable/observable.config';
import { FOLLOW_EVENTS as FOLLOW } from '../../@core/follow/observable/observable.config';
import { POST_EVENTS as POST } from '../../@core/post/observable/observable.config';
import { COMMENT_EVENTS as COMMENT } from '../../@core/comment/observable/observable.config';
import { SOCKET } from '../../reactive/reactive.config';

export const EVENT = {
  ...LIKE,
  NOTIFICATION,
  FOLLOW,
  POST,
  COMMENT,
  SOCKET,
};
