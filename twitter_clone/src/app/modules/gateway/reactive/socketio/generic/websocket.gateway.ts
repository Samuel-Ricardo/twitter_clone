import { inject, injectable } from 'inversify';
import { WebSocketGateway } from '../../../generic/websocket.gateway';
import { SocketIO } from '@/app/modules/reactive/socket/io';
import { MODULE } from '@/app/modules/app.registry';
import { IPublishSocketData } from '@/app/@types/gateway/reactive/websocket/publish';
import { ISubscribeSocketData } from '@/app/@types/gateway/reactive/websocket/listen';
import { EVENT } from '@/app/modules/config/event';
import { CONFIG } from '@/app/modules/config/app.config';
import { type ICryptographer } from '@/app/modules/security/cryptography/cryptography.contract';
import { GlobalUser } from '@/app/global/user.global';

@injectable()
export class SocketIOGateway implements WebSocketGateway<SocketIO> {
  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    protected readonly _socket: SocketIO,
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly _cypher: ICryptographer,
    // @inject(MODULE.CONFIG.SOCKET_EVENT)
    protected readonly _EVENTS: typeof EVENT.SOCKET = EVENT.SOCKET,
    // @inject(MODULE.CONFIG.API.SOCKET.URL)
    protected readonly _URL: string = CONFIG.API.SOCKET.URL,
  ) {}

  get URL() {
    return this._URL;
  }

  get socket() {
    return this._socket;
  }

  get EVENT() {
    return this._EVENTS;
  }

  publish(payload: IPublishSocketData<any>) {
    const encrypted = this.encrypt(payload.data);
    this.socket.io.emit(payload.event, encrypted);
  }

  subscribe(scheduled: ISubscribeSocketData<any, any>) {
    const decryptMiddleware = (data?: any, ...rest: any) => {
      const decrypted = this.decrpyt(data);
      const others = rest.map((param: any) => this.decrpyt(param));

      return scheduled.action(decrypted, ...others);
    };

    this.socket.io.on(scheduled.event, decryptMiddleware);
    console.log({ SOCKET: this.socket, scheduled });
  }

  private get userToken() {
    return GlobalUser.user?.sessionToken ?? '';
  }

  private encrypt(data: any) {
    return { encrypted: this._cypher.encryptIv(JSON.stringify(data)) };
  }

  private decrpyt(data: any) {
    Object.keys(data).forEach(async (key) => {
      if (typeof data[key] === 'string')
        data[key] = JSON.parse(await this._cypher.decryptIv(data[key]));
    });

    return data;
  }
}
