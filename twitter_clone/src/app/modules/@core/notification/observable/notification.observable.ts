import {
  IEmitNotificationDTO,
  IEmitNotificationDeletedDTO,
  IEmitNotificationViewedDTO,
} from '../DTO/observable/emit';
import {
  IListenNotificationDTO,
  IListenNotificationDeletedDTO,
  IListenNotificationViewedDTO,
} from '../DTO/observable/listen';

export interface INotificationObservable {
  emitNotification(notification: IEmitNotificationDTO): any | Promise<any>;
  listenNotification(scheduled: IListenNotificationDTO): any | Promise<any>;

  emitNotificationViewed(
    notification: IEmitNotificationViewedDTO,
  ): any | Promise<any>;
  listenNotificationViewed(
    scheduled: IListenNotificationViewedDTO,
  ): any | Promise<any>;

  emitNotificationDeleted(
    notification: IEmitNotificationDeletedDTO,
  ): any | Promise<any>;
  listenNotificationDeleted(
    scheduled: IListenNotificationDeletedDTO,
  ): any | Promise<any>;

  //  emitDeleteNotification(notification: IEmitNotificationDTO): any | Promise<any>;

  //  listenLike: (schedule: IListenLikeDTO) => any | Promise<any>;
  //  listenDislike: (schedule: IListenDislikeDTO) => any | Promise<any>;
  // listenPost: (schedule: IListenPostDTO) => any | Promise<any>;
  // listenComment: (schedule: IListenCommentDTO) => any | Promise<any>;
  // listenFollow: (schedule: IListenFollowDTO) => any | Promise<any>;
  // listenUnfollow: (schedule: IListenUnfollowDTO) => any | Promise<any>;
}
