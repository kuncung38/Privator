import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchBookings, setUser } from "../stores/actionCreator";
import { ChatPage } from "../components/chatComponents/ChatPage";

import Modal from "react-modal";
import { AddReviewForm } from "../components/AddReviewForm";

const DashboardUser = () => {
    const [loading, setLoading] = useState(true);
    const [isActive, setisActive] = useState("listBook");

    const dispatch = useDispatch();

    //! Modal
    const [chosenId, setChosenId] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    Modal.setAppElement("#root");

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
        },
    };

    //! Modal End

    useEffect(() => {
        dispatch(fetchBookings());
        dispatch(setUser());
        setLoading(false);
    }, []);

    const { courses } = useSelector((state) => state.bookings);
    console.log(courses);

    const styleLevel = () => {};

    const paging = () => {
        if (isActive == "listBook") {
            return (
                <div className="grid grid-cols-5 gap-x-10">
                    {courses?.map((course) => (
                        <div
                            key={course.id}
                            className={
                                course.status == "Completed"
                                    ? "w-60 relative shadow-md grayscale"
                                    : "w-60 relative shadow-md"
                            }
                        >
                            <div className="flex flex-col justify-between px-2 py-4">
                                <div className="text-sm flex flex-col gap-y-2">
                                    <p>{course.Course.name}</p>
                                    <p className="text-gray-400">
                                        {course.Instructor.fullName}
                                    </p>
                                </div>
                                {/* <p>Rp. {course.Course.price}</p> */}

                                <div className="flex flex-col gap-y-4 text-sm mt-2">
                                    <div className="px-3 bg-[#eceb98] w-fit">
                                        <span className="text-[#3d3c0a] font-bold">
                                            {course.Course.level}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div
                                            className={
                                                course?.status == "Completed"
                                                    ? "flex border justify-center py-1  bg-[#acd2cd] hover:bg-[#f7f9fa] invisible"
                                                    : "flex border justify-center py-1  bg-[#acd2cd] hover:bg-[#f7f9fa]"
                                            }
                                        >
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
                                        <button
                                            onClick={() => {
                                                setChosenId(course.CourseId);
                                                toggleModal();
                                            }}
                                            className="flex border justify-center py-1 hover:bg-[#f7f9fa]"
                                        >
                                            <p>Review Course</p>
                                        </button>
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
                    </div>
                </div>
            </div>
            <div className="px-32 mt-10">{paging()}</div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Schedule Modal"
            >
                <header className="flex flex-row relative justify-center mb-8">
                    <button
                        onClick={toggleModal}
                        className="absolute right-0 top-1 duration-200 hover:scale-125 hover:text-red-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-semibold">Add Your Review</h1>
                </header>

                <main className="flex flex-col gap-4 items-center mx-16 ">
                    <AddReviewForm id={chosenId} />
                </main>
            </Modal>
        </div>
    );
};

export default DashboardUser;
