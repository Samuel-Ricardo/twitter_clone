export interface ISubscribeSocketData<D, R> {
  event: string;
  action: (data?: D, ...rest: any) => R | Promise<R>;
}
