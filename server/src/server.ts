import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import { createServer } from 'http';

import { started } from './utils/started';
import { home } from './utils/home';

import './config';

const app = express();
const server = createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

let players = [];

io.on('connection', socket => {
  socket.emit('all', players);

  socket.on('join', data => {
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
    players = players.filter(player => player.id !== socket.id);
    socket.broadcast.emit('leave', socket.id);
  });

  socket.on('kick', playerId => {
    players = players.filter(player => player.id !== playerId);
    socket.broadcast.emit('kicked', playerId);
  });
});

app.use(cors());
app.use(express.json());

app.get('/', home);

app.listen(process.env.SERVER_PORT, () => started(process.env.SERVER_PORT));
