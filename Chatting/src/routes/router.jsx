import { createBrowserRouter } from "react-router-dom";
import { ChatPage } from "../views/ChatPage";
import ChoicePage from "../views/ChoicePage";
import { LoginPage } from "../views/LoginPage";

const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/choice", element: <ChoicePage /> },
    { path: "/chat", element: <ChatPage /> },
]);

export default router;
