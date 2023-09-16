export const AXIOS_GATEWAY_REGISTRY_MOCK = {
  FOLLOW: {
    MOCK: Symbol.for('mock:module.gateway.axios.follow'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.follow.simulated'),
  },
  LIKE: {
    MOCK: Symbol.for('mock:module.gateway.axios.like'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.like.simulated'),
  },
  POST: {
    MOCK: Symbol.for('mock:module.gateway.axios.post'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.post.simulated'),
  },
  USER: {
    MOCK: Symbol.for('mock:module.gateway.axios.user'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.user.simulated'),
  },
  COMMENT: {
    MOCK: Symbol.for('mock:module.gateway.axios.comment'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.comment.simulated'),
  },
};
