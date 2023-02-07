import "../index.css";
import Rating from "react-rating";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCourses } from "../stores/actionCreator";
import { Link } from "react-router-dom";

const Course = () => {
    const { courses } = useSelector((state) => state.courses);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-y-7">
            {courses.map((course) => (
                <div
                    key={course.id}
                    className="w-84 relative shadow-lg rounded-lg m-5 duration-200 hover:scale-105"
                >
                    <Link to={`/course/detail/${course.id}`}>
                        <div className="rounded-t-md bg-cover relative -z-20 ">
                            <img
                                src={course.imgUrl}
                                alt=""
                                className="w-full object-cover rounded-xl"
                            />
                        </div>
                    </Link>
                    <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
                        <p>{course.name}</p>
                        <p className="text-gray-400">
                            {course.Instructor.fullName}
                        </p>
                        <p>Rp. {course.price}</p>
                        <div className="flex flex-col gap-y-4">
                            <div className="p-1 px-3 bg-[#f3ca8c] rounded-lg">
                                <span className="text-[#6e2c1e] font-bold">
                                    {course.level}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Course;
