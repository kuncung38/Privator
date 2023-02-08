import '../index.css';
import Rating from 'react-rating';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { fetchCourses } from '../stores/actionCreator';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Course from '../components/Course';

function Courses() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { courses } = useSelector(state => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
    setLoading(false);
  }, []);

  if (loading) {
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>;
  }

  return (
    <>
      <div className="flex flex-col h-72 justify-center">
        <h1 className="text-6xl align-middle text-center font-medium">
          All Courses
        </h1>
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="flex flex-wrap justify-center gap-8 m-10">
        {/* <div className="flex justify-center">
          <div className="flex flex-col rounded-lg bg-white max-w-sm justify-center items-center p-10 m-3 gap-10 shadow-xl">
            <img
              className="rounded-t-lg"
              src={require('../assets/violin.png')}
            />
            <div className="">
              <h5 className="text-gray-900 font-Display font-medium text-2xl items-end">
                Music
              </h5>
            </div>
          </div>
        </div> */}
        {courses?.map(course => (
          <Course course={course} />
        ))}
      </div>
    </>
  );
}

export default Courses;
