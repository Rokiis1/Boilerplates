import { useContext } from "react";
import SocketContext from "./context/SocketContext";

const App = () => {
  const { socket, uid, users } = useContext(SocketContext).SocketState;
  return (
    <div>
      <h2>Socket info:</h2>
      <p>Your user ID:{uid}</p>
      <p>User online:{users.length}</p>
      <p>Socket ID:{socket?.id}</p>
    </div>
  );
};

export default App;
