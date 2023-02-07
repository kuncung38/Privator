import { useEffect } from 'react';
import { useState } from 'react';
import Review from '../../components/Review';
import Calendar from '../../components/TeacherSide/Calendar';
import Course from '../../components/Course';
import '../../index.css';

const Dashboard = () => {
  const [isActive, setisActive] = useState('listCourse');
  const [activeForm, setActiveForm] = useState(false);

  const renderSection = () => {
    if (isActive == 'listCourse') {
      return (
        <div className="px-44 py-16">
          <div>
            <Course />
          </div>
        </div>
      );
    } else if (isActive == 'Students') {
      return <div className="px-44 py-16">hagsdjhgs</div>;
    } else if (isActive == 'Reviews') {
      return (
        <div className="px-44 py-16">
          <div>
            <Review />
          </div>
        </div>
      );
    } else if (isActive == 'Schedule') {
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
    <div className="min-h-screen">
      <div className="instructorMain bg-[#292b2f] px-44 py-16 pb-4 -z-10">
        <h1 className="text-white text-4xl">Dashboard</h1>
        <div className="flex justify-between mt-7">
          <div className="w-2/3 text-white flex gap-x-9 helvetica-bold translate-y-4 bg-[#292b2f]">
            <button
              className={
                isActive !== 'listCourse'
                  ? 'text-gray-400 border-b-8 pb-3 border-b-[#292b2f]'
                  : 'border-b-8 pb-3 border-b-white'
              }
              onClick={() => setisActive('listCourse')}
            >
              List Course
            </button>
            <button
              className={
                isActive !== 'Students'
                  ? 'text-gray-400 border-b-8 pb-3 border-b-[#292b2f]'
                  : 'border-b-8 pb-3 border-b-white'
              }
              onClick={() => setisActive('Students')}
            >
              Students
            </button>
            <button
              className={
                isActive !== 'Reviews'
                  ? 'text-gray-400 border-b-8 pb-3 border-b-[#292b2f]'
                  : 'border-b-8 pb-3 border-b-white'
              }
              onClick={() => setisActive('Reviews')}
            >
              Reviews
            </button>
            <button
              className={
                isActive !== 'Schedule'
                  ? 'text-gray-400 border-b-8 pb-3 border-b-[#292b2f]'
                  : 'border-b-8 pb-3 border-b-white'
              }
              onClick={() => setisActive('Schedule')}
            >
              Schedule
            </button>
          </div>
          <div className="flex items-center text-white helvetica-bold gap-x-4 translate-y-2">
            <button onClick={() => setisActive(!activeForm)}>Add Course</button>
          </div>
        </div>
      </div>
      {renderSection()}
    </div>
  );
};

export default Dashboard;
