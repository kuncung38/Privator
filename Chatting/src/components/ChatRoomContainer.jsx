import React from "react";

const ChatRoomContainer = ({ room }) => {
    console.log(room);
    return (
        <section className="h-full w-1/3 border-r-2 border-slate-300 flex flex-col">
            <div className="flex flex-row items-center gap-4 border-b-slate-400 p-2 shadow-md cursor-pointer duration-200 hover:bg-blue-50">
                <div className="flex justify-center items-center rounded-full h-12 w-12 border-2 border-slate-200 shadow-md">
                    img
                </div>
                <p>name</p>
            </div>
        </section>
    );
};

export default ChatRoomContainer;
