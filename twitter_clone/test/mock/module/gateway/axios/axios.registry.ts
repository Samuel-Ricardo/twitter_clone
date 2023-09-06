export const AXIOS_GATEWAY_REGISTRY_MOCK = {
  POST: {
    MOCK: Symbol.for('mock:module.gateway.axios.post'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.post.simulated'),
  },
  USER: {
    MOCK: Symbol.for('mock:module.gateway.axios.user'),
    SIMULATE: Symbol.for('mock:module.gateway.axios.user.simulated'),
  },
};
