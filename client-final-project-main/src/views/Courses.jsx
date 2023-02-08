import "../index.css";
import Rating from "react-rating";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchCourses, getCategoriesCourse } from "../stores/actionCreator";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Course from "../components/Course";

function Courses() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { courses, categories } = useSelector((state) => state.courses);

    const [shownCourse, setShownCourse] = useState([]);

    // const {categories} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(fetchCourses());
        dispatch(getCategoriesCourse());
        setLoading(false);
    }, []);

    useEffect(() => {
        if (courses.length) {
            setShownCourse(courses);
        }
    }, [courses]);

    function filterCourses(value) {
        const things = courses.filter((el) => el.CategoryId === value);

        setShownCourse(things);
    }

    if (loading) {
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>;
    }

    return (
        <>
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl align-middle text-center font-medium my-16">
                    All Courses
                </h1>
            </div>

            <div id="category" className="grid grid-cols-4 gap-5 mb-5 p-5">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="hover:bg-slate-200 duration-200 rounded-md cursor-pointer shadow-sm text-center py-4 font-bold bg-gray-100"
                        onClick={() => filterCourses(category.id)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

            <div className="flex flex-wrap justify-center gap-8 m-10">
                {shownCourse?.length == 0 ? (
                    <div>
                        <h1 className="text-2xl font-bold text-gray-400 py-32">
                            Course not found.
                        </h1>
                    </div>
                ) : (
                    shownCourse?.map((course) => (
                        <Course course={course} key={course.id} />
                    ))
                )}
            </div>
        </>
    );
}

export default Courses;
