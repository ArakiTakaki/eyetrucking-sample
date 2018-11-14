function registSocket(server) {
  const io = require("socket.io")(server);
  io.on("connection", function(socket) {
    let room = "";
    let name = "";

    // roomへ接続する処理をおこなう。
    socket.on("client_to_server_join", function(data) {
      room = data.room;
      console.log(`JOIN THE ${room} ROOM`);
      socket.join(room);
      name = data.name;
    });

    socket.on("client_to_server", function(data) {
      io.to(room).emit("server_to_client", { message: data.message });
      console.log(`ROOM: ${room} `);
      console.log(`MESSAGE: ${data.message}`);
      console.log(`NAME: ${name}`);
    });
  });
}

module.exports = registSocket;
