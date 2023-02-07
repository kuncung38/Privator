import { useState } from "react"
import "../../index.css"
import Rating from "react-rating"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Course = (props) => {
    const location = useLocation()
    const {course} = props

    const buttonChoice = (data) => {
        if(data.level){
            return (
                <div className="flex flex-col justify-between gap-y-4">
                        <span className="py-1 px-2 bg-[#f3ca8c] text-[#6e2c1e] font-bold text-xs w-fit mb-1">Advanced</span>
                        {/* <div className="border rounded-md">
                            <div className="py-1 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book now</p>
                            </div>        
                        </div> */}
                    </div>
            )
        }
    }
    return (
        <>
            <Link className="w-60 border shadow-md rounded-sm overflow-hidden hover:scale-105 duration-200 ease-in-out" to="/course/detail/2">
                <div className="rounded-t-md bg-cover relative -z-20 ">
                    <img src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="" className="w-full object-cover"/>
                </div> 
                <div className="px-2 py-4 pb-2 text-sm flex flex-col gap-y-2">
                    <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                    <p className="text-gray-400">Heisenberg</p>
                    <p className="font-bold">Rp. 759.000,00</p>
                    <div className="flex flex-col justify-between gap-y-4">
                        <span className="py-1 px-2 bg-[#f3ca8c] text-[#6e2c1e] font-bold text-xs w-fit mb-1">Advanced</span>
                        {/* <div className="border rounded-md">
                            <div className="py-1 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book now</p>
                            </div>        
                        </div> */}
                    </div>
                </div>
            </Link>
            {/* <div className="w-56 relative grayscale">
                <div className="rounded-t-md bg-cover relative -z-20 ">
                    <img src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="" className="w-full object-cover"/>
                </div> 
                <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
                    <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                    <p className="text-gray-400">Heisenberg</p>
                    <p>Rp. 759.000,00</p>
                    <div className="flex flex-col gap-y-4">
                        <p className="p-1 px-3 bg-[#f3ca8c]"><span className="text-[#6e2c1e] font-bold">Intermediate</span></p>
                        <div className="border">
                            
                            <div className="py-2 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-56 relative">
                <div className="rounded-t-md bg-cover relative -z-20 ">
                    <img src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="" className="w-full object-cover"/>
                </div> 
                <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
                    <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                    <p className="text-gray-400">Heisenberg</p>
                    <p>Rp. 759.000,00</p>
                    
                    <div className="flex flex-col gap-y-4">
                        <div className="p-1 px-3 bg-[#eceb98]"><span className="text-[#3d3c0a] font-bold">Intermediate</span></div>
                        <div className="border">
                            
                            <div className="py-2 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-56 relative">
                <div className="rounded-t-md bg-cover relative -z-20 ">
                    <img src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="" className="w-full object-cover"/>
                </div> 
                <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
                    <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                    <p className="text-gray-400">Heisenberg</p>
                    <p>Rp. 759.000,00</p>
                    <div className="flex flex-col gap-y-4">
                        <div className="p-1 px-3 bg-[#92e9a2]"><span className="text-[#3d3c0a] font-bold">Beginner</span></div>
                        <div className="border">
                            
                            <div className="py-2 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-56 relative">
                <div className="rounded-t-md bg-cover relative -z-20 ">
                    <img src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg" alt="" className="w-full object-cover"/>
                </div> 
                <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
                    <p>React - The Complete Guide (incl Hooks, React Router, Redux)</p>
                    <p className="text-gray-400">Heisenberg</p>
                    <p>Rp. 759.000,00</p>
                    <div className="flex flex-col gap-y-4">
                        <div className="p-1 px-3 bg-[#92e9a2]"><span className="text-[#3d3c0a] font-bold">Beginner</span></div>
                        <div className="border">
                            
                            <div className="py-2 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Course