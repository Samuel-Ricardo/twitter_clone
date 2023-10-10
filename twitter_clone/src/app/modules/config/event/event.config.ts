import { LIKE_EVENTS as LIKE } from '../../@core/like/observable/observable.config';
import { NOTIFICATION_EVENTS as NOTIFICATION } from '../../@core/notification/observable/observable.config';
import { FOLLOW_EVENTS as FOLLOW } from '../../@core/follow/observable/observable.config';
import { SOCKET } from '../../reactive/reactive.config';

export const EVENT = {
  ...LIKE,
  NOTIFICATION,
  FOLLOW,
  SOCKET,
};
