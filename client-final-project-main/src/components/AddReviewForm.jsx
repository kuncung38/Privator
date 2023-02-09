import axios from "axios";
import { Notify } from "notiflix";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ORIGIN = "http://localhost:3000";

export const AddReviewForm = ({ id }) => {
    const [score, setScore] = useState(1);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const submitReview = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios({
                method: "POST",
                url: `${ORIGIN}/review/${id}`,
                headers: {
                    access_token: localStorage.getItem("access_token"),
                },
                data: {
                    score,
                    description,
                },
            });
            Notify.success("Thank you for your feedback");
            navigate("/course/detail/" + id);
            console.log(data.message);
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <div className="h-[35vh] w-[20vw]">
            <form
                onSubmit={(e) => submitReview(e)}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="rating">Rating</label>
                    <input
                        id="rating"
                        className="border-2 border-slate-300"
                        type="number"
                        min={1}
                        max={5}
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="rating">Description</label>
                    <textarea
                        id="description"
                        className="p-1 h-28 border-2 border-slate-300 resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    value={"Submit"}
                    className="bg-[#566bad] shadow-md text-white font-semibold py-2 cursor-pointer duration-150 hover:bg-[#6479bd]"
                />
            </form>
        </div>
    );
};
