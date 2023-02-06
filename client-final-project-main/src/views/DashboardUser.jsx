import { useEffect } from "react"
import { useState } from "react"
import "../index.css"
import Course from "../components/TeacherSide/Course"

const DashboardUser = () => {
    const [isActive, setisActive] = useState("listCourse")

    const renderSection = () => {
        if(isActive == "listCourse"){
            return   (<div className="px-44 py-16">
            <div>
                <Course/>
            </div>
        </div>  )
        }else if(isActive == "Students"){
            return (
                <div className="px-44 py-16" >
                hagsdjhgs
                </div>
            )
        }
    }
    return (
        <div className="min-h-screen">
            <div className="instructorMain bg-[#292b2f] px-44 py-16 pb-4 -z-10">    
                <h1 className="text-white text-4xl">Dashboard</h1>
                <div className="flex justify-between mt-7">
                    <div className="w-2/3 text-white flex gap-x-9 helvetica-bold translate-y-4 bg-[#292b2f]">
                        <button className={isActive !== "listCourse" ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]" : "border-b-8 pb-3 border-b-white"} onClick={() => setisActive("listCourse")}>Wish List</button>
                        <button className={isActive !== "Students" ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]" : "border-b-8 pb-3 border-b-white"} onClick={() => setisActive("Students")}>Instructor</button>
                    </div>
                </div>
            </div>
            {
                renderSection()
            }
        </div>
    )
}

export default DashboardUser