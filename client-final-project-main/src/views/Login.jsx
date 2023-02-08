import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginInstructor, loginStudent } from '../stores/actionCreator';

const Login = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  const input = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(input);
  const dispatcher = useDispatch();

  const routeRegister = () => {
    if (pathname == '/login') {
      return (
        <Link to="/register" className="text-[#3e01ff]">
          Register
        </Link>
      );
    } else {
      return (
        <Link to="/instructor/register" className="text-[#3e01ff]">
          Register
        </Link>
      );
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (pathname == '/login') {
        const data = await dispatcher(loginStudent(values));
        navigate('/');
      } else {
        const data = await dispatcher(loginInstructor(values));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-12">
      <img src={logo} alt="" className="h-20" />
      <h1 className="text-4xl font-bold">Good to see you again</h1>
      <div className="shadow-lg p-7 w-[29rem]">
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <div className="flex border shadow-none border-black focus:shadow-lg">
            <div className="flex p-2 items-center justify-center h-full border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="e.g. elon@tesla.com"
              className="min-w-72 p-3 outline-none"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="">Password</label>
          <div className="flex border border-black">
            <div className="flex p-2 items-center justify-center h-full border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-key-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="e.g. verysecret"
              className=" min-w-72 p-3 outline-none"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-[#566bad] rounded-md text-white"
          >
            Login
          </button>
          <div className="flex justify-end">
            <p>Dont have a account ? {routeRegister()}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
