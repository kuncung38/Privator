import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useFetchMessage from "../../customHooks/useFetchMessage";

const MessageContainer = () => {
    const chatroom = useSelector((state) => state.selectedChatroom);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        console.log(chatroom.id, "messageContainer");
    }, [chatroom]);

    const containerRef = useRef(null);

    const messages = useFetchMessage(chatroom.id);

    const scrollToBottom = () => {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const goLeft = {
        justifyContent: "flex-start",
    };

    const goRight = {
        justifyContent: "flex-end",
    };

    return (
        <div className="h-[90%] w-full flex flex-col p-4 gap-2 overflow-y-scroll">
            {messages.map((el) => (
                <div
                    key={el.id}
                    className="flex gap-2"
                    style={el.userId === user.id ? goRight : goLeft}
                >
                    <div
                        style={
                            el.userId === user.id
                                ? {
                                      float: "right",
                                      goRight,
                                      backgroundColor: "yellow",
                                  }
                                : // #92cbdf"
                                  {
                                      float: "right",
                                      goLeft,
                                      backgroundColor: "#e9f5f9",
                                  }
                        }
                        className="w-fit  px-3 py-1 rounded-xl"
                    >
                        <p>{el.text}</p>
                    </div>
                </div>
            ))}
            <div ref={containerRef} />
        </div>
    );
};

export default MessageContainer;
