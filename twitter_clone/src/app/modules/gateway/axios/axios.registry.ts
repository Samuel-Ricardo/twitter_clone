export const AxiosGatewayRegistry = {
  GENERIC: {
    HTTP: Symbol.for('gateway.axios.generic.http'),
  },
  USER: Symbol.for('gateway.axios.user'),
  POST: Symbol.for('gateway.axios.post'),
  COMMENT: Symbol.for('gateway.axios.comment'),
  LIKE: Symbol.for('gateway.axios.like'),
};
