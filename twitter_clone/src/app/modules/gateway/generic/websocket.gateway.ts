import { ISubscribeSocketData } from '@/app/@types/gateway/reactive/websocket/listen';
import { IPublishSocketData } from '@/app/@types/gateway/reactive/websocket/publish';

export interface WebSocketGateway<S> {
  get URL(): string;
  get socket(): S;

  publish<D>(payload: IPublishSocketData<D>): any | Promise<any>;
  subscribe(scheduled: ISubscribeSocketData<any, any>): any | Promise<any>;
}
