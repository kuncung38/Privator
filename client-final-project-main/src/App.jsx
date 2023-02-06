import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Template from "./views/Template"
import NotFound from "./views/Notfound"
import InstructorWelcome from "./views/InstructorWelcome"
import Dashboard from "./views/TeacherSide/Dashboard"
import Welcome from "./views/Welcome"
import Login from "./views/Login"
import Register from "./views/Register"
import Profile from "./views/Profile"
import Home from "./views/Home"
import MyProfile from "./views/MyProfile"
import DetailCourse from "./views/DetailsCourse"
import DashboardUser from "./views/DashboardUser"



const router = createBrowserRouter([
  {
    element: <Template/>,
    children: [
      {
        path : "/welcome",
        element : <Welcome />,
      },
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "/instructor",
        element : <InstructorWelcome />,
      },
      {
        path : "/instructor/dashboard",
        element : <Dashboard/>
      },
      {
        path : "/user/dashboard/:id",
        element : <Dashboard/>
      },
      {
          path: "*",
          element: <NotFound />,
      },
      {
        path: "/profile/user",
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
        path: "/dashboard/user/:id",
        element: <DashboardUser />,
      }
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
  // 
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
