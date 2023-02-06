import React from "react";
import ChatRoomContainer from "./ChatRoomContainer";

const ChatContainer = ({ chatRooms }) => {
    return (
        <div className="h-[80vh] w-[60vw] bg-[#f4f9fc] shadow-md flex items-center">
            <ChatRoomContainer />
        </div>
    );
};

export default ChatContainer;
