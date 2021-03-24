const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    },
});

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({
        working: true
    })
})

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
            isHost: players.length === 0
        }

        players.push(player);

        socket.emit('player', player);
        console.log(`player: ${socket.id}`);

        socket.broadcast.emit('new', player);
        console.log(`new: ${socket.id}`);
    });

    socket.on("disconnect", () => {
        console.log(`disconnect: ${socket.id}`);
        players = players.filter(player => player.id !== socket.id);
        socket.broadcast.emit('leave', socket.id)
    });

    socket.on("kick", (playerId) => {
        console.log(`kick: ${playerId}`);
        players = players.filter(player => player.id !== playerId);
        socket.broadcast.emit('kicked', playerId)
    });
})

server.listen(8080, () => console.log('server started on http://localhost:8080'));
