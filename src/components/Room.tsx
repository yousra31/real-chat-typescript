import { Socket } from "socket.io-client";
import { useState, useContext } from "react";
import {useChatContext} from '../context/useChatContext'
import Chat from './Chat';

export interface roomContent {
    socket: Socket, 
    username: string, 
    setUsername: (username: string) => void,
    room: string,
    setRoom: (room: string) => void
}

const Room = () => {

    const {socket, username, setUsername, room, setRoom} = useContext(useChatContext);
    const [showChat, setShowChat] = useState<boolean>(false);
    
    const joinRoom = () : void => {
        if(username!=="" && room!=="") {
        socket.emit("join_room", room);
        setShowChat(true)
        }
    }
  return (
    <>
        {!showChat ? (
        <div className="joinChatContainer">
            <h3>Join the chat</h3>
            <input 
              type="text" 
              placeholder="John" 
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Room ID"
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join a Room</button>
        </div>)
        : (
        <Chat />
        )}    
    </>
  )
}

export default Room