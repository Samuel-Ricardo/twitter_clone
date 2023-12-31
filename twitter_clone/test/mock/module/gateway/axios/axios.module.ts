import { Container } from 'inversify';
import { AXIOS_MODULE_MOCK } from '../../axios/axios.module';
import { AXIOS_GATEWAY_REGISTRY_MOCK } from './axios.registry';
import { mockAxiosUserGateway, simulateAxiosUserGateway } from './user';
import {
  mockAxiosPostGateway,
  simulateAxiosPostGateway,
} from './post/post.gateway';
import {
  mockAxiosCommentGateway,
  simulateAxiosCommentGateway,
} from './comment/comment.gateway';
import { mockAxiosLikeGateway, simulateAxiosLikeGateway } from './like';
import {
  mockAxiosFollowGateway,
  simulateAxiosFollowGateway,
} from './follow/follow.gateway';

const MODULE = new Container({ autoBindInjectable: true });

export const AXIOS_GATEWAY_MODULE_MOCK = Container.merge(
  MODULE,
  AXIOS_MODULE_MOCK,
);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.USER.MOCK,
).toDynamicValue(mockAxiosUserGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.USER.SIMULATE,
).toDynamicValue(simulateAxiosUserGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.POST.MOCK,
).toDynamicValue(mockAxiosPostGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.POST.SIMULATE,
).toDynamicValue(simulateAxiosPostGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.COMMENT.MOCK,
).toDynamicValue(mockAxiosCommentGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.COMMENT.SIMULATE,
).toDynamicValue(simulateAxiosCommentGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.LIKE.MOCK,
).toDynamicValue(mockAxiosLikeGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.LIKE.SIMULATE,
).toDynamicValue(simulateAxiosLikeGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.FOLLOW.MOCK,
).toDynamicValue(mockAxiosFollowGateway);

AXIOS_GATEWAY_MODULE_MOCK.bind(
  AXIOS_GATEWAY_REGISTRY_MOCK.FOLLOW.SIMULATE,
).toDynamicValue(simulateAxiosFollowGateway);
