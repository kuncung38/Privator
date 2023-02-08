import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoriesCourse, addCourse } from "../stores/actionCreator";

const AddCourse = () => {
  const { categories } = useSelector((state) => state.categories);

  let dispatcher = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatcher(getCategoriesCourse());
  }, []);

  const [inputCourse, setInputCourse] = useState({
    name: "",
    detail: "",
    level: "",
    price: 0,
    type: "",
    CategoryId: 0,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputCourse({
      ...inputCourse,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatcher(addCourse(inputCourse));

    navigate("/instructor/dashboard");
  };
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center gap-y-12">
        <img alt="" className="h-20" />
        <div className="shadow-lg p-7 w-[29rem]">
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <div className="flex border shadow-none border-black focus:shadow-lg">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="John doe"
                className="min-w-72 p-3 outline-none"
                name="name"
                value={inputCourse.name}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="">Description</label>
            <div className="flex border shadow-none border-black focus:shadow-lg">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="e.g. elon@tesla.com"
                className="min-w-72 p-3 outline-none"
                name="detail"
                value={inputCourse.detail}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="">Level</label>
            <div className="flex border shadow-none border-black focus:shadow-lg">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <select
                type="text"
                placeholder="Jakarta, Indonesia"
                className="min-w-72 p-3 outline-none"
                name="level"
                value={inputCourse.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>;
                <option value="Advanced">Advanced</option>;
              </select>
            </div>
            <label htmlFor="">Price</label>
            <div className="flex border border-black">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <input
                type="number"
                placeholder="e.g. verysecret"
                className=" min-w-72 p-3 outline-none"
                name="price"
                value={inputCourse.price}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="">Type</label>
            <div className="flex border border-black">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <select
                type="text"
                placeholder="e.g. verysecret"
                className=" min-w-72 p-3 outline-none"
                name="type"
                value={inputCourse.type}
                onChange={handleChange}
              >
                <option value="Offline">Offline</option>;
                <option value="Online">Online</option>;
              </select>
            </div>

            <label htmlFor="">Category</label>
            <div className="flex border border-black">
              <div className="flex p-2 items-center justify-center h-full border-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <select
                type="number"
                placeholder="e.g. verysecret"
                className=" min-w-72 p-3 outline-none"
                name="CategoryId"
                value={inputCourse.CategoryId}
                onChange={handleChange}
              >
                <option value={0} selected disabled>
                  -- Select Genre --
                </option>
                {categories.map((el) => {
                  return <option value={el.id}>{el.name}</option>;
                })}
              </select>
            </div>
            <button type="submit">Add Course</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
