import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const ChatRightSection = () => {
    return (
        <section className="w-full h-full">
            <MessageContainer />

            <MessageInput />
        </section>
    );
};

export default ChatRightSection;
