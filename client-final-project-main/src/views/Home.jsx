import banner from "../assets/banner1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../components/Course";
import { fetchCourses } from "../stores/actionCreator";

import ReactMapGL from "react-map-gl";

const Home = () => {
    const { courses } = useSelector((state) => state.courses);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
        setLoading(false);
    }, []);

    const [viewport, setViewport] = useState({
        width: "100px", //or full width then set width: "100vw",
        height: "400px", //full height then set height: "100vh",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });

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
                    <Course />
                </div>
            </div>
        </div>
    );
};

export default Home;
