import React from "react";
import { useSelector } from "react-redux";
import { sendMessage } from "../../service/firebase";

const MessageInput = ({ roomId }) => {
    const [value, setValue] = React.useState("");

    const chatroom = useSelector((state) => state.selectedChatroom);
    const user = useSelector((state) => state.user);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(chatroom.id, user, value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex h-[10%] gap-1">
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className="py-3 px-2 flex-1 rounded-sm"
                required
                minLength={1}
            />
            <input
                type="submit"
                disabled={value < 1}
                className="py-3 px-3.5 bg-blue-400 cursor-pointer"
                value={"Send"}
            ></input>
        </form>
    );
};
export default MessageInput;
