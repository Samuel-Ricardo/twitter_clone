import { IEmitPostDTO } from '../DTO/observable/emit/created.dto';
import { IListenPostDTO } from '../DTO/observable/listen/created.dto';

export interface IPostObservable {
  emitPost(post: IEmitPostDTO): any | Promise<any>;
  listenPost(schedule: IListenPostDTO): any | Promise<any>;
}
