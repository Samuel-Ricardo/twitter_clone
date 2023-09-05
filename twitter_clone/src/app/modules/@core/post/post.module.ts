import { Container } from 'inversify';
import { GatewayModule } from '../../gateway/gateway.module';
import { POST_REGISTRY } from './post.registry';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  FindAllPostUseCase,
  FindPostsByAuthorUseCase,
  UpdatePostUseCase,
} from './use-case';

const MODULE = new Container({ autoBindInjectable: true });

export const POST_MODULE = Container.merge(MODULE, GatewayModule);

POST_MODULE.bind(POST_REGISTRY.USE_CASE.CREATE).to(CreatePostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.DELETE).to(DeletePostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.ALL).to(FindAllPostUseCase);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.BY.AUTHOR.ID).to(
  FindPostsByAuthorUseCase,
);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.FIND.BY.ID).to(
  FindPostsByAuthorUseCase,
);
POST_MODULE.bind(POST_REGISTRY.USE_CASE.UPDATE).to(UpdatePostUseCase);
