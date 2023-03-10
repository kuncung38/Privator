import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerInstructor, registerStudent } from '../stores/actionCreator';

const Register = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  console.log(pathname);
  const input = {
    fullName: '',
    email: '',
    location: '',
    password: '',
  };

  const [values, setValues] = useState(input);
  const dispatcher = useDispatch();

  const handleInputChange = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    values;
  };

  const routeLogin = () => {
    if(pathname == "/register"){
      return (
        <Link to="/login" className="text-[#3e01ff]">
          Login
        </Link>
      )
    }else{
      return (
        <Link to="/instructor/login" className="text-[#3e01ff]">
          Login
        </Link>
      )
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if(pathname == "/register"){
        await dispatcher(registerStudent(values));
        navigate('/');
      }else{
        await dispatcher(registerInstructor(values))
        navigate("/instructor/login")
      }
      console.log(values);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-12">
      <img src={logo} alt="" className="h-20" />
      <div className="shadow-lg p-7 w-[29rem]">
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <label htmlFor="">Full Name</label>
          <div className="flex border shadow-none border-black focus:shadow-lg">
            <div className="flex p-2 items-center justify-center h-full border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="John doe"
              className="min-w-72 p-3 outline-none"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
            />
          </div>
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
          <label htmlFor="">Location</label>
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
              placeholder="Jakarta, Indonesia"
              className="min-w-72 p-3 outline-none"
              name="location"
              value={values.location}
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
              type="text"
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
            Register
          </button>
          <div className="flex justify-end">
            <p>
              Already have a account ?{' '}
              {
                routeLogin()
              }
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
