import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";

import ChatRoom from './Component/ChatRoom';

const socket =io ("http://localhost:4000")
function App() {
  return (
    <div className="App">
      <ChatRoom socket={socket}/>
    </div>
  );
}

export default App;
