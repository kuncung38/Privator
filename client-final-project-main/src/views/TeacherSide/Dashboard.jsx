import { useEffect } from "react";
import { useState } from "react";
import Review from "../../components/Review";
import Calendar from "../../components/TeacherSide/Calendar";
import Course from "../../components/Course";
import "../../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardInstructor } from "../../stores/actionCreator";

const Dashboard = () => {
  const [isActive, setisActive] = useState("listCourse");
  const [activeForm, setActiveForm] = useState(false);

  const dispatcher = useDispatch();
  // const { instructor } = useSelector(state => state.course)
  const { user_login } = useSelector((state) => state.instructor);

  //   const {instructor_login} = useSelector(state => state.instructor)

  useEffect(() => {
    // console.log(instructor_login);
    // dispatcher(getOneInstructor(instructor_login?.id))
    dispatcher(getDashboardInstructor());
  }, [activeForm]);

  const renderSection = () => {
    if (isActive == "listCourse") {
      return (
        <div className="px-44 py-16 grid grid-cols-4">
          <div>
            {user_login.Courses?.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      );
    } else if (isActive == "Students") {
      return <div className="px-44 py-16">hagsdjhgs</div>;
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
        <div className="px-44 py-16">
          <div>
            <Calendar />
          </div>
        </div>
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
