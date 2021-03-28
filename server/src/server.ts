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
  console.log(`connection: ${socket.id}`);
  console.log(`all: ${socket.id}`);
  socket.emit('all', players);

  socket.on('join', data => {
    console.log(`join: ${socket.id}`);
    const player = {
      ...data,
      id: socket.id,
      isHost: players.length === 0,
    };

    players.push(player);

    socket.emit('player', player);
    console.log(`player: ${socket.id}`);

    socket.broadcast.emit('new', player);
    console.log(`new: ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`);
    players = players.filter(player => player.id !== socket.id);
    socket.broadcast.emit('leave', socket.id);
  });

  socket.on('kick', playerId => {
    console.log(`kick: ${playerId}`);
    players = players.filter(player => player.id !== playerId);
    socket.broadcast.emit('kicked', playerId);
  });
});

app.use(cors());
app.use(express.json());

app.get('/', home);

app.listen(process.env.SERVER_PORT, () => started(process.env.SERVER_PORT));
