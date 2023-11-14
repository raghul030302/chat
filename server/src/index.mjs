// import { createServer } from "http";
// import { Server } from "socket.io";
// import { v4 as uuidv4 } from "uuid"

// const httpServer = createServer();
// const io =new Server(httpServer,{
//     cors:{
//         origin: "http://localhost:3006",
//         methods: ["GET","POST"],
//     },
// });

// io.use((socket,next)=>{
//     const username=socket.handshake.auth.username;
//     if (!username) {
//         return next(new errorMonitor("Invalid UserName"));
//     }
//     socket.username=username;
//     socket.userId= uuidv4();
//     next();
// })
// io.on("connection",async (socket)=>{
//     socket.emit("session",{userId:socket.userId, username:socket.username});
// })

// console.log("working...");
// httpServer.listen(process.env.PORT || 4000);
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3006",
        methods: ["GET", "POST"],
    },
});


io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("Invalid UserName")); // Fix here
    }
    socket.username = username;
    socket.userId = uuidv4();
    next();
});

io.on("connection", async (socket) => {
    socket.emit("session", { userId: socket.userId, username: socket.username });
});

console.log("working...");
httpServer.listen(process.env.PORT || 4000);
