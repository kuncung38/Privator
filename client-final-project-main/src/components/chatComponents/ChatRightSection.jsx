import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const ChatRightSection = () => {
    return (
        <section className="w-full h-full bg-cover relativ bg-opacity-25 bg-[url('https://www.canva.com/design/DAFaDx17Ids/view')]">
            <MessageContainer />

            <MessageInput />
        </section>
    );
};

export default ChatRightSection;
