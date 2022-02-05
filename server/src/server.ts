import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import SocketIO from 'socket.io';

import { started } from './utils/started';
import { home } from './utils/home';

import './config';

const app = express();

const server = createServer(app);

const io: SocketIO.Server = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

app.get('/', home);

const rooms = new Map<string, Array<any>>();

const host = (playersState: any[]) => {
  if (playersState?.length === 1) {
    const [player] = playersState;
    return [
      {
        ...player,
        isHost: true,
      },
    ];
  }
  return playersState;
};

io.on('connection', socket => {
  let sessionId = null;

  socket.on('join', ({ sessionId: id, player: data }) => {
    sessionId = id;

    socket.join(sessionId);

    console.log(sessionId);

    if (!rooms.get(sessionId)) {
      rooms.set(sessionId, []);
    }

    const players = rooms.get(sessionId);

    const player = {
      ...data,
      id: socket.id,
      isHost: players.length === 0,
      sessionId,
    };

    socket.emit('players', players);

    players.push(player);

    socket.emit('player', player);

    socket.broadcast.in(sessionId).emit('new', player);

    rooms.set(sessionId, players);
  });

  socket.on('disconnect', () => {
    rooms.set(
      sessionId,
      host(
        rooms.get(sessionId)?.filter(player => player.id !== socket.id) || [],
      ),
    );
    socket.broadcast.in(sessionId).emit('leave', socket.id);
  });

  socket.on('kick', playerId => {
    rooms.set(
      sessionId,
      host(
        rooms.get(sessionId)?.filter(player => player.id !== playerId) || [],
      ),
    );
    socket.broadcast.in(sessionId).emit('kicked', playerId);
  });
});

server.listen(process.env.SERVER_PORT, () => started(process.env.SERVER_PORT));
