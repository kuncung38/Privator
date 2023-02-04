import { createBrowserRouter } from "react-router-dom";
import RoomPage from "../../Room";
import HomeView from "../views/HomeView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/room/:roomId",
        element: <RoomPage />,
    },
]);

export default router;
