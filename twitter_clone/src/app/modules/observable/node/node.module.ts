import { Container } from 'inversify';
import { EVENT_MODULE } from '../../event/event.module';
import { ConfigModule as CONFIG } from '../../config/config.module';
import { NODE_OBSERVABLE_REGISTER } from './node.registry';
import { NodeObservable } from './generic/generic.observable';
import { NodeLikeObservable } from './like/like.observable';
import { NodeNotificationObservable } from './notification/notification.observable';
import { NodeFollowObservable } from './follow/follow.observable';
import { NodePostObservable } from './post/post.observable';
import { NodeCommentObservable } from './comment/comment.observable';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const NODE_OBSERVABLE_MODULE = Container.merge(
  MODULE,
  EVENT_MODULE,
  CONFIG,
);

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.GENERIC)
  .to(NodeObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.LIKE)
  .to(NodeLikeObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.NOTIFICATION)
  .to(NodeNotificationObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.FOLLOW)
  .to(NodeFollowObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.POST)
  .to(NodePostObservable)
  .inSingletonScope();

NODE_OBSERVABLE_MODULE.bind(NODE_OBSERVABLE_REGISTER.COMMENT)
  .to(NodeCommentObservable)
  .inSingletonScope();
