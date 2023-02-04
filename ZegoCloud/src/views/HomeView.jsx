import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const [value, setValue] = useState();

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <div>
            <input
                type={"text"}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter Room Code"
            />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    );
};

export default HomeView;
