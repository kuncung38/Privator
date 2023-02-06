import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Template = () => {
    return (
        <div className="min-h-screen">
          <Navbar/>
          <Outlet/>
          <Footer/>  
        </div>
    )
}

export default Template