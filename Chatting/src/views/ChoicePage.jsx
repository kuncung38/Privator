import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../service/firebase";
import { setTarget } from "../store/actionGenerator";

const ChoicePage = () => {
    const user = useSelector((state) => state.user);
    const target = useSelector((state) => state.target);
    const navigator = useNavigate();
    const dispatcher = useDispatch();

    const choose = (targetUser) => {
        dispatcher(setTarget(targetUser));
        console.log(targetUser, "is chosen");
    };

    const next = async () => {
        console.log(target, "from choice");
        const name =
            user < target
                ? `${user.username}${target.username}`
                : `${target.username}${user.username}`;
        await setDoc(doc(db, "chatrooms", name), {
            user: [user, target],
            timestamp: serverTimestamp(),
        });
        navigator("/chat");
    };

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center gap-8">
            <button
                onClick={(e) => navigator("/")}
                className="bg-red-50 shadow-md p-2"
            >
                Back
            </button>

            <div className="flex gap-8">
                {user.id !== 1 && (
                    <button
                        className="border-2 p-2"
                        onClick={(e) => choose({ id: 1, username: "Ricko" })}
                    >
                        Chat Ricko now
                    </button>
                )}
                {user.id !== 2 && (
                    <button
                        className="border-2 p-2"
                        onClick={(e) => choose({ id: 2, username: "Tasya" })}
                    >
                        Chat Tasya now
                    </button>
                )}
                {user.id !== 3 && (
                    <button
                        className="border-2 p-2"
                        onClick={(e) => choose({ id: 3, username: "Faldi" })}
                    >
                        Chat Faldi now
                    </button>
                )}
            </div>

            <button className="p-2 bg-slate-400 shadow-md" onClick={next}>
                next
            </button>
        </section>
    );
};

export default ChoicePage;
