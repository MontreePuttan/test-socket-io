const express = require('express')
const app = express()
//const port = 3000
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res) => {
    //res.end("Hell World");
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log("a client connected");

    // Listen
    socket.on('chat message', (msg) => {
        
        console.log('Message ' + msg);

        // Replay
        io.emit('chat message', msg);
    });
})

http.listen(3000, function(){
    console.log('listen on *:3000');
});

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))