import { IEmitDislikeDTO } from '../emit/dislike.dto';

export interface IListenDislikeDTO {
  action: (like: IEmitDislikeDTO) => any | Promise<any>;
}
