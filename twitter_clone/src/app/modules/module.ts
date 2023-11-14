import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const MODULE = new Container({ autoBindInjectable: true });

export const { lazyInject } = getDecorators(MODULE);
