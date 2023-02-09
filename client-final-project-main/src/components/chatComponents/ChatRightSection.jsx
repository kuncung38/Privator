import React from "react";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const ChatRightSection = () => {
    return (
        <section className="w-full h-full bg-cover relativ bg-opacity-25 bg-[url('https://media.discordapp.net/attachments/1068578969227628585/1073177993855381554/Untitled_design.jpg?width=1246&height=701')]">
            <MessageContainer />

            <MessageInput />
        </section>
    );
};

export default ChatRightSection;
