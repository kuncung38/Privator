import { useEffect } from "react";
import { useState } from "react";
import Review from "../../components/Review";
import Course from "../../components/Course";
import "../../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    errorHandler,
    getDashboardInstructor,
    setUser,
} from "../../stores/actionCreator";
import { ChatPage } from "../../components/chatComponents/ChatPage";
import axios from "axios";
import { Loading, Notify } from "notiflix";

const ORIGIN = "http://localhost:3000";

const Dashboard = () => {
    const [isActive, setisActive] = useState("listCourse");
    const [activeForm, setActiveForm] = useState(false);

    const dispatcher = useDispatch();

    const { user_login } = useSelector((state) => state.instructor);

    useEffect(() => {
        dispatcher(setUser());
        dispatcher(getDashboardInstructor());
    }, [activeForm]);

    const completeSchedule = async (id) => {
        Loading.circle();
        try {
            await axios({
                method: "DELETE",
                url: `${ORIGIN}/schedule/completeSchedule/${id}`,
                headers: {
                    access_token: localStorage.getItem("access_token"),
                },
            });
            dispatcher(getDashboardInstructor());
            Loading.remove();
            Notify.success("Schedule has been successfully cleared");
        } catch (error) {
            errorHandler(error);
        }
    };

    const renderSection = () => {
        if (isActive == "listCourse") {
            return (
                <div className="px-44 py-16 grid grid-cols-5 gap-x-4 gap-y-7">
                    {user_login.Courses?.map((course) => (
                        <Course key={course.id} course={course} />
                    ))}
                </div>
            );
        } else if (isActive == "Students") {
            return (
                <div className="px-44 py-16 h-[80vh] w-[80vw]">
                    <ChatPage />
                </div>
            );
        } else if (isActive == "Reviews") {
            return (
                <div className="px-44 py-16">
                    <div>
                        <Review />
                    </div>
                </div>
            );
        } else if (isActive == "Schedule") {
            return (
                <>
                    <div className="xl:w-3/4 2xl:w-4/5 w-full flex flex-col justify-center items-center mx-auto">
                        <div className="px-4 md:px-10 py-4 md:py-7">
                            <div className="flex items-center justify-between">
                                <p className="flex text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                                    Schedules
                                </p>
                            </div>
                        </div>
                        <div className="bg-white px-4 md:px-10 pb-5">
                            <div className="overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <tbody>
                                        {user_login.Schedules?.map(
                                            (schedule) => (
                                                <tr className="text-sm leading-none text-gray-600 h-16 gap-5 shadow-md">
                                                    <td className="w-1/2">
                                                        <div className="flex items-center">
                                                            <div className="pl-2">
                                                                <p className="text-lg font-medium leading-none text-gray-800">
                                                                    {
                                                                        schedule
                                                                            .Student
                                                                            .fullName
                                                                    }
                                                                </p>
                                                                <p className="text-sm leading-3 text-gray-600 mt-2">
                                                                    {
                                                                        schedule.day
                                                                    }{" "}
                                                                    :{" "}
                                                                    {
                                                                        schedule.time
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="pl-16 mb-2">
                                                            {
                                                                schedule.Course
                                                                    .name
                                                            }
                                                        </p>
                                                        {schedule.Course
                                                            .type ===
                                                        "Offline" ? (
                                                            <p className="pl-16">
                                                                {
                                                                    schedule
                                                                        .Student
                                                                        .location
                                                                }
                                                            </p>
                                                        ) : (
                                                            <p className="pl-16">
                                                                {
                                                                    schedule
                                                                        .Course
                                                                        .type
                                                                }
                                                            </p>
                                                        )}
                                                    </td>

                                                    <td>
                                                        <div className="mt-4 sm:mt-0">
                                                            <button
                                                                onClick={() =>
                                                                    completeSchedule(
                                                                        schedule.id
                                                                    )
                                                                }
                                                                className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                                                            >
                                                                <p className="text-sm font-medium leading-none text-white">
                                                                    Complete
                                                                    Course
                                                                </p>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    };
    return (
        <>
            <div className="">
                <div className="instructorMain bg-[#292b2f] px-44 py-16 pb-4 -z-10">
                    <h1 className="text-white text-4xl">Dashboard</h1>
                    <div className="flex justify-between mt-7">
                        <div className="w-2/3 text-white flex gap-x-9 helvetica-bold translate-y-4 bg-[#292b2f]">
                            <button
                                className={
                                    isActive !== "listCourse"
                                        ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                                        : "border-b-8 pb-3 border-b-white"
                                }
                                onClick={() => setisActive("listCourse")}
                            >
                                List Course
                            </button>
                            <button
                                className={
                                    isActive !== "Students"
                                        ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                                        : "border-b-8 pb-3 border-b-white"
                                }
                                onClick={() => setisActive("Students")}
                            >
                                Students
                            </button>
                            <button
                                className={
                                    isActive !== "Reviews"
                                        ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                                        : "border-b-8 pb-3 border-b-white"
                                }
                                onClick={() => setisActive("Reviews")}
                            >
                                Reviews
                            </button>
                            <button
                                className={
                                    isActive !== "Schedule"
                                        ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                                        : "border-b-8 pb-3 border-b-white"
                                }
                                onClick={() => setisActive("Schedule")}
                            >
                                Schedule
                            </button>
                        </div>
                        <div className="flex items-center text-white helvetica-bold gap-x-4 translate-y-2">
                            <Link to="/instructor/add-course">Add Course</Link>
                        </div>
                    </div>
                </div>
                {renderSection()}
            </div>
            <div
                className="absolute w-screen bg-black z-30"
                style={!activeForm ? { display: "none" } : { display: "block" }}
            >
                <div>bsadjgasdjas</div>
            </div>
        </>
    );
};

export default Dashboard;
