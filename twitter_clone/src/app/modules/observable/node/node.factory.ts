import { NodeObservable } from './generic/generic.observable';
import { NodeLikeObservable } from './like/like.observable';
import { NODE_OBSERVABLE_MODULE } from './node.module';
import { NODE_OBSERVABLE_REGISTER } from './node.registry';

export const NODE_OBSERVABLE_FACTORY = {
  GENERIC: () =>
    NODE_OBSERVABLE_MODULE.get<NodeObservable>(
      NODE_OBSERVABLE_REGISTER.GENERIC,
    ),
  LIKE: () =>
    NODE_OBSERVABLE_MODULE.get<NodeLikeObservable>(
      NODE_OBSERVABLE_REGISTER.LIKE,
    ),
};
