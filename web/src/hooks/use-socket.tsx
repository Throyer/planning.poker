import { createContext, ReactNode, useContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

interface SocketIoContextData {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const SocketIoContext = createContext<SocketIoContextData>(
  {} as SocketIoContextData,
);

interface SocketIoProviderProps {
  children: ReactNode;
}

const socket = io('http://localhost:8081');

export const SocketIoProvider = ({
  children,
}: SocketIoProviderProps): JSX.Element => (
  <SocketIoContext.Provider value={{ socket }}>
    {children}
  </SocketIoContext.Provider>
);

export const useSocket = () => useContext(SocketIoContext);
