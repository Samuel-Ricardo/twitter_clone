import { Container } from 'inversify';
import { ConfigRegistry } from './config.registry';
import { CONFIG } from './app.config';
import getDecorators from 'inversify-inject-decorators';

export const ConfigModule = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ConfigModule.bind(ConfigRegistry.CONFIG).toConstantValue(CONFIG);

ConfigModule.bind(ConfigRegistry.API.URL).toConstantValue(CONFIG.API.URL);
ConfigModule.bind(ConfigRegistry.API.SOCKET.URL).toConstantValue(
  CONFIG.API.SOCKET.URL,
);

ConfigModule.bind(ConfigRegistry.NEXT.API.URL).toConstantValue(
  CONFIG.NEXT.API.URL,
);

ConfigModule.bind(ConfigRegistry.EVENT).toConstantValue(CONFIG.EVENT);

ConfigModule.bind(ConfigRegistry.SOCKET_EVENT).toConstantValue(
  CONFIG.EVENT.SOCKET,
);

ConfigModule.bind(
  ConfigRegistry.SECURITY.CYPHER.ALGORITHMS.AES[128].CBC,
).toConstantValue(CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[128].CBC);

ConfigModule.bind(
  ConfigRegistry.SECURITY.CYPHER.ALGORITHMS.AES[256].CBC,
).toConstantValue(CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[256].CBC);

ConfigModule.bind(
  ConfigRegistry.SECURITY.CYPHER.ALGORITHMS.AES[128].GCM,
).toConstantValue(CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[128].GCM);

ConfigModule.bind(
  ConfigRegistry.SECURITY.CYPHER.ALGORITHMS.AES[256].GCM,
).toConstantValue(CONFIG.SECURITY.CYPHER.ALGORITHMS.AES[256].GCM);

ConfigModule.bind(ConfigRegistry.SECURITY.CYPHER.KEY).toConstantValue(
  CONFIG.SECURITY.CYPHER.KEY,
);

ConfigModule.bind(ConfigRegistry.SECURITY.CYPHER.BREAKER).toConstantValue(
  CONFIG.SECURITY.CYPHER.BREAKER,
);

ConfigModule.bind(ConfigRegistry.SECURITY.CYPHER.AUTH.BREAKER).toConstantValue(
  CONFIG.SECURITY.CYPHER.AUTH.BREAKER,
);

ConfigModule.bind(ConfigRegistry.SECURITY.CYPHER.IV.BREAKER).toConstantValue(
  CONFIG.SECURITY.CYPHER.IV.BREAKER,
);

export const { lazyInject: injectConfig } = getDecorators(ConfigModule);
