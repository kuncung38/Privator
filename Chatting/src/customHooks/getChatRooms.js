import { useEffect, useState } from "react";
import { getAllChatrooms } from "../service/firebase";

function useChatRooms(user) {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        getAllChatrooms(user, setChatRooms);
    });
    return chatRooms;
}

export default useChatRooms;
