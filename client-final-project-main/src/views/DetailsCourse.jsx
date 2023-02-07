import { Link } from "react-router-dom"
import CardReview from "../components/CardReview"
import "../index.css"

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneCourse } from '../stores/actionCreator';
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal';

const DetailCourse = () => {
  const { course } = useSelector(state => state.course);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [chosenTime, setChosenTime] = useState('');

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const fetchOneCourse = async id => {
    try {
      dispatch(getOneCourse(id));
      console.log(getOneCourse);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneCourse(id);
  }, [id]);

  useEffect(() => {
    console.log(course);
    course.Instructor?.Schedules.forEach(el => {
      console.log(el.time);
    });
    console.log(
      course.Instructor?.Schedules.some(el => el.time === 'Monday')
        ? 'it got monday'
        : 'nope'
    );
  }, [course]);

  const [snapToken, setSnapToken] = useState('');

  useEffect(() => {
    const fetchSnapToken = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/payment/getToken/${id}`,
          {
            headers: {
              access_token: localStorage.getItem('access_token'),
            },
            body: {
              amount: 'amount', // Replace with actual amount
              order_id: 'your-order-id', // Replace with actual order ID
            },
          }
        );
        console.log(data);
        setSnapToken(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSnapToken();
  }, []);

  // const bookCourse = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:3000/payment/${id}`, {
  //       headers: {
  //         access_token: localStorage.getItem('access_token'),
  //       },
  //       body: {
  //         amount: 'amount', // Replace with actual amount
  //         order_id: 'your-order-id', // Replace with actual order ID
  //         time: chosenTime,
  //       },
  //     });
  //     console.log(`Successfully book course with schedule ${chosenTime}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // var day = chosenTime;

  const bookCourse = async day => {
    try {
      let response = await axios(`http://localhost:3000/payment/${id}`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        data: {
          amount: 'amount', // Replace with actual amount
          order_id: 'your-order-id', // Replace with actual order ID
          day: day,
        },
      });
    } catch (error) {}
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
    },
  };

  const disabledStyles = {
    pointerEvents: 'none',
    background: '#CFCFCF',
    border: 'none',
  };

  // * Modal for schedule
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement('#root');

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  const bookSchedule = time => {
    setChosenTime();
    handlePayment(time);
  };

  const handlePayment = day => {
    console.log(snapToken);
    if (!snapToken) {
      return;
    }
    window.snap.pay(snapToken.token, {
      onSuccess: async result => {
        await bookCourse(day);
        setShowModal(false);
        updateStatus();
        navigate('/');
        console.log('Transaction success:', result);
      },
      onPending: result => {
        console.log('Transaction pending:', result);
      },
      onError: result => {
        console.error('Transaction error:', result);
      },
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="">
      <div className="bg-[#292b2f] helvetica-bold px-20 py-10 text-white pr-[30.5rem] flex flex-col gap-y-4">
        <p id="category" className="text-[#566bad]">
          {course?.Category.name}
        </p>
        <h1 id="title" className="text-3xl">
          {course?.name}
        </h1>
        <p id="detail" className="text-extralight helvetica">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit qui,
          beatae amet rem architecto odio nisi nostrum eius natus libero.
        </p>
        <p className="font-normal">
          Created by{' '}
          <Link to="/profile/user" className="text-[#b7abe0] underline">
            {' '}
            {course?.Instructor.fullName}
          </Link>
        </p>
        <div className="flex gap-x-10">
          <div className="flex gap-x-3 items-center text-extralight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            <p className="">
              created <span>07/07/2023</span>
            </p>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-globe"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
            <p>Indonesia</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-hash"
              viewBox="0 0 16 16"
            >
              <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
            </svg>
            <p className="text-green-400">{course?.type}</p>
          </div>
        </div>
      </div>
      <div className="flex px-20">
        <div className="py-20 w-4/6 flex flex-col gap-y-7">
          <div>
            <h1 className="text-2xl font-bold mb-2">Difficulty</h1>
            <p className="text-[#6e2c1e]">{course?.level}</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Description</h1>
            <p className="font-bold">What is this course about ? </p>
            <p className="text-sm">{course?.detail}</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Review</h1>
          </div>
        </div>
        <div className="w-2/6 -translate-y-72 bg-white shadow-lg h-[30rem]">
          <div className="w-full">
            <img src={course?.imgUrl} alt="" className="object-cover w-full" />
          </div>
          <div className="px-6 py-7">
            <h1 className="font-bold text-3xl">Rp. {course?.price}</h1>
            <div className="flex flex-col gap-y-3 mt-7">
              <div className="flex gap-x-3">
                <div className="w-5/6 py-2 text-center border-r bg-[#566bad] font-bold text-white hover:bg-[#f7f9fa] hover:text-black">
                  Message
                </div>
                <div className="w-1/6 py-2 flex items-center justify-center border border-black">
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
              </div>
              <div
                onClick={toggleModal}
                className="text-center border text-white border-black py-3 hover:bg-[#f7f9fa] hover:text-black bg-[#292b2f]"
              >
                <button>Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <h1 className="text-xl font-semibold">Pick Your Schedules</h1>
        </header>

        <main className="flex flex-col gap-4 items-center mx-16 ">
          <button
            onClick={e => bookSchedule('Monday')}
            className="flex justify-center items-center py-2 px-4 bg-[#566bad] text-white w-full duration-200 hover:scale-y-125 hover:bg-white border-2 border-[#566bad] hover:text-[#566bad]"
            style={
              course.Instructor?.Schedules.some(el => el.time === 'Monday')
                ? disabledStyles
                : {}
            }
          >
            Monday
          </button>
          <button
            onClick={e => bookSchedule('Tuesday')}
            className="flex justify-center items-center py-2 px-4 bg-[#566bad] text-white w-full duration-200 hover:scale-y-125 hover:bg-white border-2 border-[#566bad] hover:text-[#566bad]"
            style={
              course.Instructor?.Schedules.some(el => el.time === 'Tuesday')
                ? disabledStyles
                : {}
            }
          >
            Tuesday
          </button>
          <button
            onClick={e => bookSchedule('Wednesday')}
            className="flex justify-center items-center py-2 px-4 bg-[#566bad] text-white w-full duration-200 hover:scale-y-125 hover:bg-white border-2 border-[#566bad] hover:text-[#566bad]"
            style={
              course.Instructor?.Schedules.some(el => el.time === 'Wednesday')
                ? disabledStyles
                : {}
            }
          >
            Wednesday
          </button>
          <button
            onClick={e => bookSchedule('Thursday')}
            className="flex justify-center items-center py-2 px-4 bg-[#566bad] text-white w-full duration-200 hover:scale-y-125 hover:bg-white border-2 border-[#566bad] hover:text-[#566bad]"
            style={
              course.Instructor?.Schedules.some(el => el.time === 'Thursday')
                ? disabledStyles
                : {}
            }
          >
            Thursday
          </button>
          <button
            onClick={e => bookSchedule('Friday')}
            className="flex justify-center items-center py-2 px-4 bg-[#566bad] text-white w-full duration-200 hover:scale-y-125 hover:bg-white border-2 border-[#566bad] hover:text-[#566bad]"
            style={
              course.Instructor?.Schedules.some(el => el.time === 'Friday')
                ? disabledStyles
                : {}
            }
          >
            Friday
          </button>
        </main>
      </Modal>
    </div>
  );
};

export default DetailCourse;
