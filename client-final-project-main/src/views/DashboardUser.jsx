import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchBookings, setUser } from "../stores/actionCreator";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ChatPage } from "../components/chatComponents/ChatPage";

const DashboardUser = () => {
    const [loading, setLoading] = useState(true);
    const [isActive, setisActive] = useState("listBook");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBookings());
        dispatch(setUser());
        setLoading(false);
    }, []);

    const { courses } = useSelector((state) => state.bookings);
    console.log(courses);

    const paging = () => {
        if (isActive == "listBook") {
            return (
                <div className="grid grid-cols-4 gap-x-10">
                    {courses?.map((course) => (
                        <div
                            key={course.id}
                            className="w-60 relative shadow-md"
                        >
                            <div className="rounded-t-md bg-cover relative -z-20 ">
                                <img
                                    src={course.Course.imgUrl}
                                    alt=""
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-between px-2 py-4">
                                <div className="text-sm flex flex-col gap-y-2">
                                    <p>{course.Course.name}</p>
                                    <p className="text-gray-400">
                                        {course.Instructor.fullName}
                                    </p>
                                </div>
                                {/* <p>Rp. {course.Course.price}</p> */}

                                <div className="flex flex-col gap-y-4">
                                    <div className="p-1 px-3 bg-[#f3ca8c]">
                                        <span className="text-[#6e2c1e] font-bold">
                                            {course.Course.level}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex border justify-center py-1  bg-[#acd2cd] hover:bg-[#f7f9fa]">
                                            <a
                                                href={`/room/${course.Course.name.replaceAll(
                                                    " ",
                                                    "-"
                                                )}`}
                                                target="_blank"
                                            >
                                                <p>JOIN CLASS</p>
                                            </a>
                                        </div>
                                        <div className="flex border justify-center py-1 hover:bg-[#f7f9fa]">
                                            <p>Review Course</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="px-44 py-16 h-[80vh] w-[80vw]">
                    <ChatPage />
                </div>
            );
        }
    };

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
                <h1 className="text-white text-4xl">Dashboard</h1>
                <div className="flex justify-between mt-7">
                    <div className="w-2/3 text-white flex gap-x-9 helvetica-bold translate-y-4 bg-[#292b2f]">
                        <button
                            className={
                                isActive !== "listBook"
                                    ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                                    : "border-b-8 pb-3 border-b-white"
                            }
                            onClick={() => setisActive("listBook")}
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
                            Instructor
                        </button>
                        {/* <button
                      className={
                          isActive !== "Schedule"
                              ? "text-gray-400 border-b-8 pb-3 border-b-[#292b2f]"
                              : "border-b-8 pb-3 border-b-white"
                      }
                      onClick={() => setisActive("Schedule")}
                  >
                      Schedule
                  </button> */}
                    </div>
                </div>
            </div>
            <div className="px-32 mt-10">{paging()}</div>
        </div>
    );
};

export default DashboardUser;
