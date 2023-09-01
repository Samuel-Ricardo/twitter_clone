import { Container } from 'inversify';
import { ConfigRegistry } from './config.registry';
import { CONFIG } from './app.config';

export const ConfigModule = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ConfigModule.bind(ConfigRegistry.CONFIG).toConstantValue(CONFIG);

ConfigModule.bind(ConfigRegistry.API.URL).toConstantValue(CONFIG.API.URL);
ConfigModule.bind(ConfigRegistry.NEXT.API.URL).toConstantValue(
  CONFIG.NEXT.API.URL,
);
