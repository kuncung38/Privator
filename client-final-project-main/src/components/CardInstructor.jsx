import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"

import "./card.css"


// import required modules
import { Pagination, Navigation } from "swiper";

const CardInstructor = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={true}
                pagination={{
                    type: "progressbar"
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper w-[100%] h-[100%] px-20"
            >
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.jpg?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardInstructor