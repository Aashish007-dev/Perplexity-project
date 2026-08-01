import 'dotenv/config';
import app from './src/app.js'
import { connectToDB } from './src/config/database.js';
import http from 'http';
import { initSocketServer } from './src/sockets/server.socket.js';

const httpServer = http.createServer(app);

initSocketServer(httpServer);


connectToDB();


httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
})