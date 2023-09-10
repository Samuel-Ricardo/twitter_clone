export const AXIOS_GATEWAY_REGISTRY_MOCK = {
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
