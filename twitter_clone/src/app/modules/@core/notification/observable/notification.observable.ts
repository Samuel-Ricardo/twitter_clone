import { IListenDislikeDTO } from '../../like/DTO/observable/listen/dislike.dto';
import { IListenLikeDTO } from '../../like/DTO/observable/listen/like.dto';
import { IEmitNotificationDTO } from '../DTO/observable/emit/create.dto';

export interface INotificationObservable {
  emitNotification(notification: IEmitNotificationDTO): any | Promise<any>;

  listenLike: (schedule: IListenLikeDTO) => any | Promise<any>;
  listenDislike: (schedule: IListenDislikeDTO) => any | Promise<any>;
  // listenPost: (schedule: IListenPostDTO) => any | Promise<any>;
  // listenComment: (schedule: IListenCommentDTO) => any | Promise<any>;
  // listenFollow: (schedule: IListenFollowDTO) => any | Promise<any>;
  // listenUnfollow: (schedule: IListenUnfollowDTO) => any | Promise<any>;
}
