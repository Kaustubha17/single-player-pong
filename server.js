const sockets = require('./sockets')
const app = require('./api')
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}...`)
});

sockets.listen(io);


