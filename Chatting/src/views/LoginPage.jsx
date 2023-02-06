import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "../store/actionGenerator";

export const LoginPage = () => {
    const navigator = useNavigate();

    const dispatcher = useDispatch();

    function movePage(value) {
        navigator("/choice");
        dispatcher(setUser(value));
    }
    return (
        <section className="h-screen w-screen justify-center items-center flex flex-row gap-4">
            <div className="flex flex-col gap-4">
                <p>1, Ricko</p>
                <button
                    onClick={(e) => {
                        movePage({ id: 1, username: "Ricko" });
                    }}
                    className="border-2 border-black"
                >
                    Login as user Ricko
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <p>2, Tasya</p>
                <button
                    onClick={(e) => {
                        movePage({ id: 2, username: "Tasya" });
                    }}
                    className="border-2 border-black"
                >
                    Login as user Tasya
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <p>3, Faldi</p>
                <button
                    onClick={(e) => {
                        movePage({ id: 3, username: "Faldi" });
                    }}
                    className="border-2 border-black"
                >
                    Login as user Faldi
                </button>
            </div>
        </section>
    );
};
