import { CONFIG } from './app.config';
import { ConfigModule } from './config.module';
import { ConfigRegistry } from './config.registry';

export const ConfigFactory = {
  CONFIG: () => ConfigModule.get<typeof CONFIG>(ConfigRegistry.CONFIG),
  EVENT: () => ConfigModule.get<typeof CONFIG.EVENT>(ConfigRegistry.EVENT),
};
