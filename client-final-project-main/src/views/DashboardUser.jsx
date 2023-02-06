import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchBookings } from '../stores/actionCreator';
import { Link } from 'react-router-dom';

const DashboardUser = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
    setLoading(false);
  }, []);

  const { courses } = useSelector(state => state.bookings);
  // const [isActive, setisActive] = useState('listCourse');

  // const renderSection = () => {
  //   if (isActive == 'listCourse') {
  //     return (
  //       <div className="px-44 py-16">
  //         <div>
  //           <Course />
  //         </div>
  //       </div>
  //     );
  //   } else if (isActive == 'Students') {
  //     return <div className="px-44 py-16">hagsdjhgs</div>;
  //   }
  // };

  return (
    <div className="min-h-screen">
      <div className="instructorMain bg-[#292b2f] px-44 py-16 pb-4 -z-10">
        <h1 className="text-white text-4xl">Booking List</h1>
      </div>
      <div className="w-56 relative">
        <div className="rounded-t-md bg-cover relative -z-20 ">
          <img
            src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
            alt=""
            className="w-full object-cover"
          />
        </div>

        {courses.map(course => (
          <div className="w-56 relative">
            <Link to={`/course/detail/${course.id}`}>
              <div className="rounded-t-md bg-cover relative -z-20 ">
                <img
                  src={course.imgUrl}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </Link>
            <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
              <p>{course.name}</p>
              <p className="text-gray-400">{course.Instructor.fullName}</p>
              <p>Rp. {course.price}</p>
              <Rating
                emptySymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                }
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill text-yellow-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                }
                fractions={2}
              />
              <div className="flex flex-col gap-y-4">
                <div className="p-1 px-3 bg-[#f3ca8c]">
                  <span className="text-[#6e2c1e] font-bold">
                    {course.level}
                  </span>
                </div>
                <div className="flex border">
                  <div className="w-1/6 py-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </div>
                  <div className="w-5/6 py-2 text-center border-l hover:bg-[#f7f9fa]">
                    <p className="font-bold">Book</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardUser;
