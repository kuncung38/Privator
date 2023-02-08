import '../index.css';
import Rating from 'react-rating';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCourses } from '../stores/actionCreator';
import { Link } from 'react-router-dom';

const Course = props => {
  const { course } = props;
  const { instructorName } = props;

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const leveling = () => {
    if (course.level == 'Beginner') {
      return (
        <span className="py-1 px-2 bg-[#acd2cd] text-[#2b524d] font-bold text-xs w-fit mb-1">
          {course?.level}
        </span>
      );
    } else if (course.level == 'Intermediate') {
      return (
        <span className="py-1 px-2 bg-[#eceb98] text-[#3d3c0a] font-bold text-xs w-fit mb-1">
          {course?.level}
        </span>
      );
    } else if (course.level == 'Advanced') {
      return (
        <span className="py-1 px-2 bg-[#f3ca8c] text-[#6e2c1e] font-bold text-xs w-fit mb-1">
          {course?.level}
        </span>
      );
    }
  };

  return (
    <Link
      className="w-60 border shadow-md overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-lg"
      to={`/course/detail/${course?.id}`}
    >
      <div className="rounded-t-md bg-cover relative -z-20">
        <img src={course?.imgUrl} alt="" className="w-full object-cover" />
      </div>
      <div className="px-2 py-4 pb-2 text-sm flex flex-col gap-y-2">
        <p>{course?.name}</p>
        <p className="text-gray-400">
          {course.Instructor?.fullName || instructorName}
        </p>
        <p className="font-bold">Rp. {course?.price}</p>
        <div className="flex flex-col justify-between gap-y-4">
          {leveling()}
        </div>
      </div>
    </Link>
  );
};

export default Course;

{
  /* <div className="border rounded-md">
                            <div className="py-1 text-center hover:bg-[#f7f9fa]">
                                <p className="font-bold">Book now</p>
                            </div>        
                        </div>  */
}
