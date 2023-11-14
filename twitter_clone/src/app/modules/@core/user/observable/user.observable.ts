export interface IUserObservable {
  listenUserCreated(schedule: any): any | Promise<any>;
  listenUserUpdated(schedule: any): any | Promise<any>;
  listenUserDeleted(schedule: any): any | Promise<any>;
  listenUserLoggedIn(schedule: any): any | Promise<any>;
  listenUserLoggedOut(schedule: any): any | Promise<any>;
}
