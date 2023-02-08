import banner from "../assets/banner1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../components/Course";
import { getCategoriesCourse } from "../stores/actionCreator";

import CardBestInstructor from "../components/CardBestInstructor";
import { fetchCourses, getInstructors } from "../stores/actionCreator";
import Map from "../components/Map";

// import CardInstructor from "../components/CardInstructor";

const Home = () => {
    let banner =
        "https://res.cloudinary.com/dzxb3lxqv/image/upload/v1675829623/My_project-1_lpgmsi.png";
    const [loading, setLoading] = useState(true);
    const { courses, instructors, categories } = useSelector(
        (state) => state.courses
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
        dispatch(getInstructors());
        dispatch(getCategoriesCourse());
        setLoading(false);
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center relative">
                <img
                    className="w-full h-96 object-cover"
                    src="https://res.cloudinary.com/dzxb3lxqv/image/upload/v1675854954/My_project-1_3_g8jmhw.png"
                ></img>
            </div>
            <div className="py-12">
                <div>
                    <div className="py-12 flex flex-col gap-y-16">
                        <div>
                            <h1 className="text-4xl mb-7 p-5 text-center">
                                All Categories
                            </h1>
                            <div
                                id="category"
                                className="grid grid-cols-4 gap-5 mb-5 p-5"
                            >
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100"
                                    >
                                        {category.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div id="search">
              <div className="w-full flex justify-end px-7">
                <form action="" className="flex w-[30rem]">
                  <input
                    type="text"
                    className="px-7 py-2 text-sm border rounded-l-md w-full outline-none bg-white"
                    placeholder="Search for everything"
                  />
                  <button className="bg-[#566bad] text-white px-3 rounded-r-md">
                    Search
                  </button>
                </form>
              </div>
            </div> */}
                        <h1 className="text-4xl text-center">
                            Instructor Around You
                        </h1>
                        <Map />

                        <div className="flex flex-col gap-y-16 justify-center items-center">
                            <h1 className="text-4xl text-center">
                                Popular Courses
                            </h1>
                            <div className="flex flex-wrap justify-center gap-8 m-10">
                                {courses?.slice(0, 5).map((course) => (
                                    <Course key={course.id} course={course} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-y-16 justify-center items-center">
                                <h1 className="text-4xl text-center">
                                    Popular Instructor
                                </h1>
                                <CardBestInstructor instructors={instructors} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
