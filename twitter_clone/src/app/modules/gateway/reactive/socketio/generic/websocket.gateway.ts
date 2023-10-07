import { inject, injectable } from 'inversify';
import { WebSocketGateway } from '../../../generic/websocket.gateway';
import { SocketIO } from '@/app/modules/reactive/socket/io';
import { MODULE } from '@/app/modules/app.registry';

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
}
