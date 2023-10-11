import { IEmitPostDTO } from '../emit/created.dto';

export interface IListenPostDTO {
  action: (post: IEmitPostDTO) => any | Promise<any>;
}
