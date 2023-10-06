import { inject, injectable } from 'inversify';
import { Socket } from 'socket.io-client';
import { MODULE } from '../../app.registry';
import { logger } from '../..';
import { SOCKET } from '../reactive.config';

@injectable()
export class SocketIO {
  constructor(
    @inject(MODULE.SOCKET.IO)
    private readonly _io: Socket,
  ) {
    this.setup();
  }

  get io() {
    return this._io;
  }

  private setup() {
    logger.info({ context: 'WEBSOCKET', message: 'Socket.IO: setup starts' });

    this.io.on(SOCKET.CONNECT, this.handleConnect);

    logger.info({ context: 'WEBSOCKET', message: 'Socket.IO: setup ends' });
  }
}
