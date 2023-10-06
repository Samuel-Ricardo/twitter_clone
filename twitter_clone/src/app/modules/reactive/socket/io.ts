import { inject, injectable } from 'inversify';
import { Socket } from 'socket.io-client';
import { MODULE } from '../../app.registry';

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

  private setup() {}
}
