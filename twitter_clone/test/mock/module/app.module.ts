import { Container } from 'inversify';
import { USER_MODULE_MOCK } from './@core/user/user.module';

const MODULE = new Container();

export const APP_MODULE_MOCK = Container.merge(MODULE, USER_MODULE_MOCK);
