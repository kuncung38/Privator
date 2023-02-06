import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatRoomContainer from "../components/ChatRoomContainer";
import { getAllChatrooms } from "../service/firebase";

export const ChatPage = () => {
    const user = useSelector((state) => state.user);
    const target = useSelector((state) => state.target);

    const [chatRooms, setChatRooms] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllChatrooms(user, setChatRooms);
    });

    return (
        <section className="w-screen h-screen flex justify-center items-center gap-4">
            <button
                onClick={(e) => navigator("/")}
                className="bg-red-50 shadow-md p-2"
            >
                Back
            </button>
            <div className="h-[80vh] w-[60vw] bg-[#f4f9fc] shadow-md flex items-center">
                {chatRooms.length > 0 &&
                    chatRooms.map((el) => {
                        <ChatRoomContainer room={el} />;
                    })}
                {/* <ChatRoomContainer /> */}
                <main className="h-full flex flex-col">Main here</main>
            </div>
        </section>
    );
};
