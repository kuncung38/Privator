import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllChatrooms } from "../../service/firebase";

import ChatRightSection from "./ChatRightSection";
import ChatRoomContainer from "./ChatRoomContainer";

export const ChatPage = () => {
    const user = useSelector((state) => state.user);

    const [chatrooms, setChatrooms] = useState([]);

    const selectedChatroom = useSelector((state) => state.selectedChatroom);

    useEffect(() => {
        getAllChatrooms(user, setChatrooms);
        console.log(chatrooms, "useeffect");
    }, []);

    return (
        <div className="h-full w-full bg-[#f4f9fc] shadow-md flex items-center">
            <div className="h-full w-1/3 border-r-2 border-slate-300 flex flex-col">
                {chatrooms.length > 0 &&
                    chatrooms.map((el) => (
                        <ChatRoomContainer room={el} key={el.id} />
                    ))}
            </div>
            {!Object.keys(selectedChatroom).length && (
                <section className="h-full w-full flex justify-center items-center">
                    <p>Please select a chatroom</p>
                </section>
            )}
            {Object.keys(selectedChatroom).length > 0 && <ChatRightSection />}
        </div>
    );
};
