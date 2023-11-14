export interface IReactiveNotificationDTO<D, F extends Function> {
  notification: D;
  schedule: F;
}
