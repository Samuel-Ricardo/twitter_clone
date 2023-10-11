import { IEmitCommentDTO } from '../DTO/observable/emit/created.dto';
import { IListenCommentDTO } from '../DTO/observable/listen/created.dto';

export interface ICommentObservable {
  emitComment(comment: IEmitCommentDTO): any | Promise<any>;
  listenComment(schedule: IListenCommentDTO): any | Promise<any>;
}
