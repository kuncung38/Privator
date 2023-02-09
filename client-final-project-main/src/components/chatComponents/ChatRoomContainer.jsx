import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChatroom } from "../../stores/actionCreator";

const ChatRoomContainer = ({ room }) => {
    const user = useSelector((state) => state.user);

    const dispatcher = useDispatch();

    const [data, setData] = useState([]);

    useEffect(() => {
        const u = room.user.filter((el) => el.fullName !== user.fullName);
        console.log(u);
        setData(u[0]);
    }, []);

    const selectChatroom = () => {
        console.log(room, "select");
        dispatcher(setSelectedChatroom(room));
    };

    return (
        <div
            onClick={selectChatroom}
            className="flex flex-row items-center gap-4 gap-x-2 border-b-slate-400 p-2 shadow-md cursor-pointer duration-200 hover:bg-blue-50"
        >
            <div className="flex justify-center items-center rounded-full h-12 w-12 border-2 border-slate-200 shadow-md">
                <img src={data.profilePicture} className="rounded-full" />
            </div>
            <p>{data.fullName}</p>
        </div>
    );
};

export default ChatRoomContainer;
