import banner from "../assets/banner1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../components/Course";

import ReactMapGL from "react-map-gl";

import CardBestInstructor from "../components/CardBestInstructor";
import { fetchCourses, getInstructors } from "../stores/actionCreator";
import Map from "../components/Map";

// import CardInstructor from "../components/CardInstructor";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const { courses, instructors } = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
        dispatch(getInstructors());
        setLoading(false);
    }, []);

    return (
        <div>
            <div id="banner">
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation]}
                    style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-navigation-size": "25px",
                        "--swiper-navigation-background-color": "black",
                    }}
                >
                    <SwiperSlide className="swiper-slide1">
                        <img
                            src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/d0e8cb70-d7bf-4f8e-a1e2-fe78f4779eb2.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide1">
                        <img
                            src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/487fb3b7-4b6e-4c2f-a3fe-67eb51016502.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="py-32 px-7">
                <section className="flex justify-center">
                    <div>Filter</div>
                </section>

                <div>
                    <div className="py-12 flex flex-col gap-y-16">
                        <div>
                            <h1 className="text-2xl font-bold mb-7">
                                Preferred categories
                            </h1>
                            <div
                                id="category"
                                className="grid grid-cols-4 gap-2"
                            >
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Tutor
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Personal Trainer
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Music
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Software Developer
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Street Dance
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Finance & Accounting
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Sports
                                </div>
                                <div className="rounded-md shadow-sm text-center py-4 font-bold bg-gray-100">
                                    Unity
                                </div>
                            </div>
                        </div>
                        <div id="search">
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
                        </div>
                        <Map />
                        <div className="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-7 gap-x-2">
                            {courses?.map((course) => (
                                <Course key={course.id} course={course} />
                            ))}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-7">
                                Popular Instructors
                            </h1>
                            <CardBestInstructor instructors={instructors} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
