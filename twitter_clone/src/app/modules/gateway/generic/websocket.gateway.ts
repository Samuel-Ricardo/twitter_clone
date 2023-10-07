import { ISubscribeSocketData } from '@/app/@types/gateway/reactive/websocket/listen';
import { IPublishSocketData } from '@/app/@types/gateway/reactive/websocket/publish';

export interface WebSocketGateway<S> {
  readonly _URL: string;
  readonly _socket: S;

  get URL(): string;
  get socket(): S;

  publish(payload: IPublishSocketData): any | Promise<any>;
  subscribe(scheduled: ISubscribeSocketData): any | Promise<any>;
}
