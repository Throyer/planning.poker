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

let players = [];

const host = (playersState: any[]) => {
  if (playersState.length === 1) {
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
  socket.on('join', data => {
    socket.emit('players', players);
    const player = {
      ...data,
      id: socket.id,
      isHost: players.length === 0,
    };

    players.push(player);

    socket.emit('player', player);

    socket.broadcast.emit('new', player);
  });

  socket.on('disconnect', () => {
    players = host(players.filter(player => player.id !== socket.id));
    socket.broadcast.emit('leave', socket.id);
  });

  socket.on('kick', playerId => {
    players = players.filter(player => player.id !== playerId);
    socket.broadcast.emit('kicked', playerId);
    console.count('kicked');
  });
});

server.listen(process.env.SERVER_PORT, () => started(process.env.SERVER_PORT));
