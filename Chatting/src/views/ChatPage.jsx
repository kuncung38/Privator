import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatRightSection from "../components/ChatRightSection";
import ChatRoomContainer from "../components/ChatRoomContainer";
import { getAllChatrooms } from "../service/firebase";

export const ChatPage = () => {
    const user = useSelector((state) => state.user);

    const [chatrooms, setChatrooms] = useState([]);

    const selectedChatroom = useSelector((state) => state.selectedChatroom);

    const navigator = useNavigate();

    useEffect(() => {
        getAllChatrooms(user, setChatrooms);
        console.log(chatrooms, "useeffect");
    }, []);

    return (
        <section className="w-screen h-screen flex justify-center items-center gap-4">
            <button
                onClick={(e) => navigator("/")}
                className="bg-red-50 shadow-md p-2"
            >
                Back
            </button>
            <div className="h-[80vh] w-[60vw] bg-[#f4f9fc] shadow-md flex items-center">
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
                {Object.keys(selectedChatroom).length > 0 && (
                    <ChatRightSection />
                )}
            </div>
        </section>
    );
};
