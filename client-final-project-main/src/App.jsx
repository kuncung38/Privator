import Template from "./views/Template";
import NotFound from "./views/Notfound";
import InstructorWelcome from "./views/InstructorWelcome";
import Dashboard from "./views/TeacherSide/Dashboard";
import Welcome from "./views/Welcome";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Home from "./views/Home";
import MyProfile from "./views/MyProfile";
import DetailCourse from "./views/DetailsCourse";
import DashboardUser from "./views/DashboardUser";
import FilterCategory from "./views/FilterCategory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCourse from "./views/AddCourse";
import Map from "./components/Map";

import { Provider } from "react-redux";

import store from "./stores/index";
import RoomPage from "./Room";

const router = createBrowserRouter([
  {
    element: <Template />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructor",
        element: <InstructorWelcome />,
      },
      {
        path: "/instructor/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/dashboard/:id",
        element: <DashboardUser />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/instructor/profile/:id",
        element: <Profile />,
      },
      {
        path: "/edit-profile/",
        element: <MyProfile />,
      },
      {
        path: "/course/detail/:id",
        element: <DetailCourse />,
      },
      {
        path: "/map",
        element: <Map />,
      },

      // {
      //   path: '/instructor',
      //   element: <InstructorWelcome />,
      // },
      {
        path: "/instructor/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: '/profile/user',
      //   element: <Profile />,
      // },
      // {
      //   path: '/edit-profile/',
      //   element: <MyProfile />,
      // },
      {
        path: "/dashboard/user/:id",
        element: <DashboardUser />,
      },
      {
        path: "/search/categories/:name",
        element: <FilterCategory />,
      },
      {
        path: "/instructor/add-course",
        element: <AddCourse />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/instructor/login",
    element: <Login />,
  },
  {
    path: "/instructor/register",
    element: <Register />,
  },
  {
    path: "/room/:roomId",
    element: <RoomPage />,
  },
  //
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
