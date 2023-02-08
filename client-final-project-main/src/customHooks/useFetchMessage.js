import { useEffect, useState } from "react";
import { getMessages } from "../service/firebase";

function useFetchMessage(roomId) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = getMessages(roomId, setMessages);
        return unsubscribe;
    }, [roomId]);

    console.log(
        "🚀 ~ file: useFetchMessage.js:15 ~ useFetchMessage ~ messages",
        messages
    );

    return messages;
}

export default useFetchMessage;
