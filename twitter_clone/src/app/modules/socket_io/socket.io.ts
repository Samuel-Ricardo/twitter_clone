import { io, Socket } from 'socket.io-client';
import { ENV } from '../config/env/app.env';

const globalSocketIO = globalThis as unknown as {
  socketIO: Socket | undefined;
};

export const socketIO =
  globalSocketIO.socketIO || io(ENV.API.SOCKET.URL, { autoConnect: false });

globalSocketIO.socketIO = socketIO;
