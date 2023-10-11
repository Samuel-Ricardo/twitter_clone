import { IEmitCommentDTO } from '../emit/created.dto';

export interface IListenCommentDTO {
  action: (comment: IEmitCommentDTO) => any | Promise<any>;
}
