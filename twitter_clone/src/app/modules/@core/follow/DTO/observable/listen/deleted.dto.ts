import { IEmitUnfollowDTO } from '../emit/deleted.dto';

export interface IListenUnfollowDTO {
  action: (deleted: IEmitUnfollowDTO) => any | Promise<any>;
}
