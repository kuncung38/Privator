import "../index.css"
// import gambar from "../assets/banner1.jpg"
import {Link} from "react-router-dom"


import CardInstructor from "../components/CardInstructor"

const Welcome = () => {
    return (
        <div className="">
            <div className="relative flex">
                <img src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/9d35651c-b825-4177-ab44-17cd3cc4eebb.jpg" alt="" className="w-full h-[27rem] object-cover" />
                <div className="absolute p-4 w-96 shadow-lg mt-24 ml-11 bg-white">
                    <h1 className="text-4xl font-bold mb-5 tracking-wide instructorMain">Skills for the future.</h1>
                    <p className="text-xs">Expand your potential with a course. Log in for your special savings through Feb 1.</p>
                </div>
            </div>
            <div className="my-32">
                <div id="ads" className="flex gap-x-10">
                    <div className="w-1/2">
                        <img src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.svg" alt="" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl font-semibold">We are the best and 
                        <span className="text-green-500"> most trusted online trainer</span></h1>
                        <p className="font-light">We`ve helped a lot of people to find their dreams.</p>
                        <div className="flex flex-col gap-y-3 mt-10">
                            <p>Professional and experienced resources</p>
                            <p>Provide the best services for users</p>
                            <p>10,000 people have worked with us</p>
                        </div>
                    </div>
                </div>
                <div id="top teacher" className="flex flex-col justify-center text-center gap-y-5 mt-32">
                    <h1 className="text-4xl font-bold tracking-wide">Best Instructor's</h1>
                    <p className="text-sm mx-auto w-[40rem]">"Your future is determined by what you start today." 2. "If we never try, we will never know." 3. "Getting up in the morning is a sign that you can achieve the life's goal better than yesterday." 4. "Do not ever give up, the beginning is always the hardest."</p>
                    <div>
                        <CardInstructor/>
                    </div>
                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
            <div className="flex items-center justify-center gap-x-9 my-9">
                    <div className="w-1/2 flex justify-end">
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="" className="w-96" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-5 justify-center">
                        <h1 className="text-3xl font-bold">Become an instructor</h1>
                        <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        <div>
                            <Link to="/instructor" className="p-4 bg-black border text-white font-semibold inline-block hover:border-black hover:bg-white hover:text-black">
                                Start teaching today
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Welcome