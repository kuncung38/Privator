import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './views/Template';
import NotFound from './views/Notfound';
import InstructorWelcome from './views/InstructorWelcome';
import Dashboard from './views/TeacherSide/Dashboard';
import Welcome from './views/Welcome';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import Home from './views/Home';
import MyProfile from './views/MyProfile';
import DetailCourse from './views/DetailsCourse';
import DashboardUser from './views/DashboardUser';
import Map from './components/Map';

import { Provider } from 'react-redux';

import store from './stores/index';

const router = createBrowserRouter([
  {
    element: <Template />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard/user/',
        element: <DashboardUser />,
      },
      {
        path: '/course/detail/:id',
        element: <DetailCourse />,
      },
      {
        path: '/map',
        element: <Map />,
      },

      // {
      //   path: '/instructor',
      //   element: <InstructorWelcome />,
      // },
      {
        path: '/instructor/dashboard',
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
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
