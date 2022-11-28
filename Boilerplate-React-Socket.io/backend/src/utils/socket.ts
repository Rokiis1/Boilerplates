import { Server, Socket } from "socket.io";
import { Server as HTTPServer } from "http";
import { v4 as uuidv4 } from "uuid";

export class ServerSocket {
  public static instance: ServerSocket;
  public io: Server;

  public users: { [uid: string]: string };

  constructor(server: HTTPServer) {
    ServerSocket.instance = this;
    this.users = {};
    this.io = new Server(server, {
      serveClient: false,
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false,
      cors: {
        origin: "*",
      },
    });
    this.io.on("connect", this.StartListeners);

    console.info("Socket IO started");
  }

  StartListeners = (socket: Socket) => {
    console.info("Message received from " + socket.id);

    socket.on(
      "handshake",
      (callback: (uid: string, users: string[]) => void) => {
        console.info("Handshake received from: " + socket.id);

        const reconnected = Object.values(this.users).includes(socket.id);

        if (reconnected) {
          console.info("This user has reconnected.");

          const uid = this.GetUidFromSocketID(socket.id);
          const users = Object.values(this.users);

          if (uid) {
            console.info("Sending callback for reconnect ...");
            callback(uid, users);
            return;
          }
        }
        // Generate new user
        const uid = uuidv4();
        this.users[uid] = socket.id;

        const users = Object.values(this.users);
        console.info("Sending callback ...");
        callback(uid, users);
        // Send new user to all connected users
        this.SendMessage(
          "user_connected",
          users.filter((id) => id !== socket.id),
          users
        );
      }
    );

    socket.on("disconnect", () => {
      console.info("Disconnect received from: " + socket.id);

      const uid = this.GetUidFromSocketID(socket.id);

      if (uid) {
        delete this.users[uid];

        const users = Object.values(this.users);

        this.SendMessage("user_disconnected", users, socket.id);
      }
    });
  };

  GetUidFromSocketID = (id: string) => {
    return Object.keys(this.users).find((uid) => this.users[uid] === id);
  };

  /**
   * Send a message throught the socket
   * @param name The name of the event, ex: handshake
   * @param users List of socket id's
   * @param payload any information needed by the user for the user for state updtes
   */

  SendMessage = (name: string, users: string[], payload?: Object) => {
    console.info("Emitting event: " + name + " to", users);
    users.forEach((id) =>
      payload ? this.io.to(id).emit(name, payload) : this.io.to(id).emit(name)
    );
  };
}
