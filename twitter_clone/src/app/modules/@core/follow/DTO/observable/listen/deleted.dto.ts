import { IEmitUnFollowDTO } from '../emit/deleted.dto';

export interface IListenUnFollowDTO {
  action: (deleted: IEmitUnFollowDTO) => any | Promise<any>;
}
