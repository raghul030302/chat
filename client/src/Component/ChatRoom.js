import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Main from "./Main";

function ChatRoom({socket}) {
  const [newUser, setnewUser] = useState("");
  const [user, setuser] = useState("");
  const [msg, setmsg] = useState("");


  useEffect(()=>{
    socket.on("session",({userId,username})=>{
      setuser(username);
    });
  },[socket]);
  function handleChange({ currentTarget: input }) {
    setnewUser(input.value);
  }

  function logNewUser() {
    socket.auth = {username:newUser};
    socket.connect();
  }
  return (
    <Main
      user={user}
      msg={msg}
      setmsg={setmsg}
      newUser={newUser}
      logNewUser={logNewUser}
      handleChange={handleChange}
    />
  );
}

export default ChatRoom;
