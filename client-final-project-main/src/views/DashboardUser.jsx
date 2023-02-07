import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchBookings } from '../stores/actionCreator';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DashboardUser = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
    setLoading(false);
  }, []);

  const { courses } = useSelector(state => state.bookings);

  // const [snapToken, setSnapToken] = useState('');

  // useEffect(() => {
  //   const fetchSnapToken = async price => {
  //     try {
  //       const response = await fetch('http://localhost:3000/payment/', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           access_token: localStorage.getItem('access_token'),
  //         },
  //         body: JSON.stringify({
  //           amount: 'amount', // Replace with actual amount
  //           order_id: 'your-order-id', // Replace with actual order ID
  //         }),
  //       });
  //       const { token } = await response.json();
  //       setSnapToken(token);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchSnapToken();
  // }, []);

  // const handlePayment = () => {
  //   if (!snapToken) {
  //     return;
  //   }
  //   window.snap.pay(snapToken, {
  //     onSuccess: result => {
  //       setShowModal(false);
  //       updateStatus();
  //       navigate('/student/dashboard');
  //       console.log('Transaction success:', result);
  //     },
  //     onPending: result => {
  //       console.log('Transaction pending:', result);
  //     },
  //     onError: result => {
  //       console.error('Transaction error:', result);
  //     },
  //   });
  // };

  // // const [isActive, setisActive] = useState('listCourse');

  // // const renderSection = () => {
  // //   if (isActive == 'listCourse') {
  // //     return (
  // //       <div className="px-44 py-16">
  // //         <div>
  // //           <Course />
  // //         </div>
  // //       </div>
  // //     );
  // //   } else if (isActive == 'Students') {
  // //     return <div className="px-44 py-16">hagsdjhgs</div>;
  // //   }
  // // };

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
        {courses?.map(course => (
          <div className="w-56 relative">
            <Link to={`/course/detail/${course.id}`}>
              <div className="rounded-t-md bg-cover relative -z-20 ">
                <img
                  src={course.Course.imgUrl}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </Link>
            <div className="px-2 py-4 text-sm flex flex-col gap-y-2">
              <p>{course.Course.name}</p>
              <p className="text-gray-400">{course.Instructor.fullName}</p>
              <p>Rp. {course.Course.price}</p>

              <div className="flex flex-col gap-y-4">
                <div className="p-1 px-3 bg-[#f3ca8c]">
                  <span className="text-[#6e2c1e] font-bold">
                    {course.Course.level}
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
                    <Link
                      to={`/course/detail/${course.Course.id}`}
                      className="font-bold"
                    >
                      Book
                    </Link>
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
