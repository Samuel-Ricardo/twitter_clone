import { IEmitFollowDTO } from '../emit/created.dto';

export interface IListenFollowDTO {
  action: (follow: IEmitFollowDTO) => any | Promise<any>;
}
