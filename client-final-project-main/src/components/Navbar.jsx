import { NavLink, useNavigate } from "react-router-dom";
import Privator from "../assets/logo.png";
import female from "../assets/female.png";

import { Notify } from "notiflix";

const Navbar = () => {
    const navigator = useNavigate();

    return (
        <div className="px-16 py-3 flex z-40 justify-between items-center shadow-md sticky top-0 bg-white">
            <div className="flex gap-x-4 items-center">
                <NavLink to="/welcome">
                    <img src={Privator} alt="" className="h-12" />
                </NavLink>
            </div>
            <div className="flex gap-x-5 text-sm">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/course">Course</NavLink>
                {localStorage.getItem(
                    "mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif"
                ) === "student" && (
                    <NavLink to="/user/dashboard">Dashboard</NavLink>
                )}
                {localStorage.getItem(
                    "mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif"
                ) === "instructor" && (
                    <NavLink to="/instructor/dashboard">Dashboard</NavLink>
                )}
                <NavLink to="/instructor">Teach on Privator</NavLink>
            </div>
            <div className="flex gap-x-5 items-center">
                {!localStorage.getItem("access_token") && (
                    <NavLink to={"/login"}>
                        <h1>login</h1>
                    </NavLink>
                )}
                {localStorage.getItem("access_token") && (
                    <>
                        <NavLink to="/edit-profile">
                            <img src={female} alt="" className="w-9" />
                        </NavLink>
                        <button
                            onClick={() => {
                                localStorage.clear();
                                Notify.success("Success logout");
                                navigator("/");
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
