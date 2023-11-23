import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import { POST_REGISTRY } from './post.registry';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostByIdUseCase,
  FindPostsByAuthorUseCase,
  UpdatePostUseCase,
} from './use-case';
import { PostService } from './service';
import { PostController } from './controller/post.controller';
import { EmitPostUseCase } from './use-case/observable/emit/created.use-case';
import { ListenPostUseCase } from './use-case/observable/listen/created.use-case';
import { SCOPE } from '../../app.tag';
import { ReactivePostService } from './service/reactive/post.service';
import { ReactivePostController } from './controller/reactive/post.controller';

import getDecorators from 'inversify-inject-decorators';
import { OBSERVABLE_MODULE } from '../../observable/observable.module';

const MODULE = new Container({ autoBindInjectable: true });

export const POST_MODULE = Container.merge(
  MODULE,
  OBSERVABLE_MODULE,
  GatewayModule,
);

POST_MODULE.bind(POST_REGISTRY.USE_CASE.CREATE).to(CreatePostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.DELETE).to(DeletePostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.ALL).to(FindAllPostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.BY.AUTHOR.ID).to(
  FindPostsByAuthorUseCase,
);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.BY.ID).to(FindPostByIdUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.UPDATE).to(UpdatePostUseCase);

POST_MODULE.bind(POST_REGISTRY.USE_CASE.OBSERVABLE.EMIT.CREATED).to(
  EmitPostUseCase,
);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.OBSERVABLE.LISTEN.CREATED).to(
  ListenPostUseCase,
);

POST_MODULE.bind(POST_REGISTRY.SERVICE)
  .to(PostService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

POST_MODULE.bind(POST_REGISTRY.CONTROLLER)
  .to(PostController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.MAIN);

POST_MODULE.bind(POST_REGISTRY.MAIN).to(PostController);

POST_MODULE.bind(POST_REGISTRY.SERVICE)
  .to(ReactivePostService)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

POST_MODULE.bind(POST_REGISTRY.CONTROLLER)
  .to(ReactivePostController)
  .whenTargetTagged(SCOPE.TAG, SCOPE.REACTIVE);

POST_MODULE.bind(POST_REGISTRY.REACTIVE).to(ReactivePostController);

export const { lazyInject: postInject } = getDecorators(POST_MODULE);
