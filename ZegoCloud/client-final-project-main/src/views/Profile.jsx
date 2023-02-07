import bannerProfile from "../assets/Winter.jpg"
import male from "../assets/male.png"
import "../index.css"
import map from "../assets/map.png"

const Profile = () => {
    return (
        <div className="helvetica">
            <div className="relative">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="" className="h-64 w-full object-cover object-center"/>
                <div className="px-20 h-64 flex w-full justify-between items-center text-white bg-[#292b2f]">
                    <div className="rounded-full border-[10px] border-[#292b2f] -translate-y-32 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="w-44 object-cover"/>
                    </div>
                    <div className="pb-16 text-right">
                        <h1 className="text-3xl font-bold">Prof.dr.Heisenberg</h1>
                        <p>Jakarta ID</p>
                    </div>
                </div>
                <div className="rounded-t-[4rem] -translate-y-16 bg-white relative z-10 py-16">
                    <div className="flex px-20 justify-center gap-x-24 mb-16">
                        <div className="flex flex-col items-center gap-y-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <p className="text-lg">4.9 / 5 Rating</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg>
                            <p className="text-lg">2.000 Students</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                            <p className="text-lg">9 Course</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-left-quote-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
                            </svg>
                            <p className="text-lg">10.000 Reviews</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-center text-5xl font-bold">Profile</h1>
                        <div className="flex justify-center py-10 px-20">
                            <img src={map} alt="" className="h-96"/>
                        </div>
                        <div>
                            <h1>Birth Date</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <h1>Phone Number</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam.</p>
                            <h1>Email</h1>
                            <p>Heisenberg@gmail.com</p>
                            <h1>bio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam nobis sunt consequatur id qui repudiandae, beatae sapiente. Nesciunt debitis atque, temporibus ut nam nostrum earum cupiditate voluptatum tempora totam, praesentium, ex consequuntur excepturi. Ipsam tempora, quae beatae nihil asperiores quasi ratione. Quam fugiat eligendi neque facere sunt error quasi?</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile