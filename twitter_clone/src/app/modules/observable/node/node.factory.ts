import { NodeFollowObservable } from './follow/follow.observable';
import { NodeObservable } from './generic/generic.observable';
import { NodeLikeObservable } from './like/like.observable';
import { NODE_OBSERVABLE_MODULE } from './node.module';
import { NODE_OBSERVABLE_REGISTER } from './node.registry';
import { NodeNotificationObservable } from './notification/notification.observable';
import { NodePostObservable } from './post/post.observable';

export const NODE_OBSERVABLE_FACTORY = {
  GENERIC: () =>
    NODE_OBSERVABLE_MODULE.get<NodeObservable>(
      NODE_OBSERVABLE_REGISTER.GENERIC,
    ),
  LIKE: () =>
    NODE_OBSERVABLE_MODULE.get<NodeLikeObservable>(
      NODE_OBSERVABLE_REGISTER.LIKE,
    ),
  NOTIFICATION: () =>
    NODE_OBSERVABLE_MODULE.get<NodeNotificationObservable>(
      NODE_OBSERVABLE_REGISTER.NOTIFICATION,
    ),
  FOLLOW: () =>
    NODE_OBSERVABLE_MODULE.get<NodeFollowObservable>(
      NODE_OBSERVABLE_REGISTER.FOLLOW,
    ),
  POST: () =>
    NODE_OBSERVABLE_MODULE.get<NodePostObservable>(
      NODE_OBSERVABLE_REGISTER.POST,
    ),
};
