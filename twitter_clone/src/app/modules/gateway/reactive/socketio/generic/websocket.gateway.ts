import { inject, injectable } from 'inversify';
import { WebSocketGateway } from '../../../generic/websocket.gateway';
import { SocketIO } from '@/app/modules/reactive/socket/io';
import { MODULE } from '@/app/modules/app.registry';
import { IPublishSocketData } from '@/app/@types/gateway/reactive/websocket/publish';
import { ISubscribeSocketData } from '@/app/@types/gateway/reactive/websocket/listen';

@injectable()
export class SocketIOGateway implements WebSocketGateway<SocketIO> {
  constructor(
    @inject(MODULE.CONFIG.API.SOCKET.URL)
    protected readonly _URL: string,
    @inject(MODULE.SOCKET.IO)
    protected readonly _socket: SocketIO,
  ) {}

  get URL() {
    return this._URL;
  }

  get socket() {
    return this._socket;
  }

  publish(payload: IPublishSocketData) {
    this.socket.io.emit(payload.event, payload.data);
  }
  subscribe(scheduled: ISubscribeSocketData) {
    this.socket.io.on(scheduled.event, scheduled.action);
  }
}
