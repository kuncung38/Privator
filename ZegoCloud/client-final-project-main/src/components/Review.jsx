import "../index.css"
import CardReview from "./CardReview"

const Review = () => {
    return (
        <div>
            <div className="flex gap-x-8 items-center">
                <div className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div>
                    <h1 className="text-3xl helvetica-bold">4.8 Instructor Rating</h1>
                </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-2 gap-x-7 gap-y-10">
                <CardReview/>
            </div>
        </div>
    )
}

export default Review