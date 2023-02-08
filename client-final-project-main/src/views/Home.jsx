import banner from '../assets/banner1.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Course from '../components/Course';

import CardBestInstructor from '../components/CardBestInstructor';
import { fetchCourses, getInstructors } from '../stores/actionCreator';
import Map from '../components/Map';

// import CardInstructor from "../components/CardInstructor";

const Home = () => {
  let banner =
    'https://res.cloudinary.com/dzxb3lxqv/image/upload/v1675829623/My_project-1_lpgmsi.png';
  const [loading, setLoading] = useState(true);
  const { courses, instructors } = useSelector(state => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(getInstructors());
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center relative">
        <img
          className="w-full h-96 object-cover"
          src="https://res.cloudinary.com/dzxb3lxqv/image/upload/v1675839500/banner-4_ymrrrf.png"
        ></img>
      </div>
      <div className="py-12">
        <div>
          <div className="py-12 flex flex-col gap-y-16">
            <div>
              <h1 className="text-4xl mb-7 p-5 text-center">All Categories</h1>
              <div id="category" className="grid grid-cols-4 gap-2 mb-5">
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
            <h1 className="text-4xl text-center">Instructor around you</h1>
            <Map />
            <div className="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-7 gap-x-2">
              {courses?.map(course => (
                <Course key={course.id} course={course} />
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-7">Popular Instructors</h1>
              <CardBestInstructor instructors={instructors} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
