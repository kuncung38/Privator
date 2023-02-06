import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Login = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-y-12">
            <img src={logo} alt="" className="h-20" />
            <h1 className="text-4xl font-bold">Good to see you again</h1>
            <div className="shadow-lg p-7 w-[29rem]">
                <form action="" className="flex flex-col gap-y-4">
                    <label htmlFor="">Email</label>
                    <div className="flex border shadow-none border-black focus:shadow-lg">
                        <div className="flex p-2 items-center justify-center h-full border-r">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="e.g. elon@tesla.com" className="min-w-72 p-3 outline-none"/>
                    </div>
                    <label htmlFor="">Password</label>
                    <div className="flex border border-black">
                        <div className="flex p-2 items-center justify-center h-full border-r">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="e.g. verysecret" className=" min-w-72 p-3 outline-none"/>
                    </div>
                    <button type="submit" className="p-3 bg-[#566bad] rounded-md text-white">Login</button>
                    <div className="flex justify-end">
                        <p>Dont have a account ? <Link to="/register" className="text-[#3e01ff]">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login 