import { IEmitLikeDTO } from '../emit/like.dto';

export interface IListenLikeDTO {
  action: (like: IEmitLikeDTO) => any | Promise<any>;
}
