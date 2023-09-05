import { AxiosGatewayModule } from './axios.module';
import { AxiosGatewayRegistry } from './axios.registry';
import { AxiosHTTPGateway } from './generic/http.gateway';
import { AxiosPostGateway } from './post/post.gateway';
import { AxiosUserGateway } from './user/user.gateway';

export const AxiosGatewayFactory = {
  GENERIC: {
    HTTP: () =>
      AxiosGatewayModule.get<AxiosHTTPGateway>(
        AxiosGatewayRegistry.GENERIC.HTTP,
      ),
  },
  USER: () =>
    AxiosGatewayModule.get<AxiosUserGateway>(AxiosGatewayRegistry.USER),
  POST: () =>
    AxiosGatewayModule.get<AxiosPostGateway>(AxiosGatewayRegistry.POST),
};
