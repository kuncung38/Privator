import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTarget } from "../store/actionGenerator";

const ChatRoomContainer = ({ room }) => {
    const user = useSelector((state) => state.user);

    const dispatcher = useDispatch();

    const [data, setData] = useState([]);
    useEffect(() => {
        const u = room.user.filter((el) => el.username !== user.username);
        setData(u);
    }, []);

    return (
        <section>
            {data.map((el) => (
                <div
                    key={el.id}
                    onClick={(e) => dispatcher(setTarget(el))}
                    className="flex flex-row items-center gap-4 border-b-slate-400 p-2 shadow-md cursor-pointer duration-200 hover:bg-blue-50"
                >
                    <div className="flex justify-center items-center rounded-full h-12 w-12 border-2 border-slate-200 shadow-md">
                        img
                    </div>
                    <p>{el?.username}</p>
                </div>
            ))}
        </section>
    );
};

export default ChatRoomContainer;
