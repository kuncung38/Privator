import { NavLink } from "react-router-dom";
import Privator from "../assets/logo.png";
import male from "../assets/male.png";
import female from "../assets/female.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const role = () => {
        let role = localStorage.mkdyznbmvkyxzcaryrqkgaxnnjtqltlcnwzuhvlqrlojif;
        if (role == "student") {
            return <NavLink to="/user/dashboard">Dashboard</NavLink>;
        } else if (role == "instructor") {
            return <NavLink to="/instructor/dashboard">Dashboard</NavLink>;
        }
    };
    return (
        <div className="px-16 py-3 flex justify-between items-center shadow-md sticky top-0 z-20 bg-white">
            <div className="flex gap-x-4 items-center">
                <NavLink to="/welcome">
                    <img src={Privator} alt="" className="h-12" />
                </NavLink>
            </div>
            <div className="flex gap-x-5 text-sm">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/course">Course</NavLink>
                {role()}
                <NavLink to="/instructor">Teach on Privator</NavLink>
            </div>
            <div className="flex gap-x-5 items-center">
                <div>
                    <NavLink to="/edit-profile">
                        <img src={female} alt="" className="w-9" />
                    </NavLink>
                </div>
                <Link to={"/login"}>
                    <h1>login</h1>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
