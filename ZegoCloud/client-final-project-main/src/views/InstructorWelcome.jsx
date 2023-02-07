import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../index.css"
import "swiper/css";
import "swiper/css/navigation"
import "../index.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const InstructorWelcome = () => {
    const [begin, setBegin] = useState("plan")

    const handleBegin = (str) => {
        setBegin(str)
    }

    return (
        <div className="helvetica">
            <div className="h-screen">
                <div className="bg-[url('https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg')] bg-cover h-full bg-center flex items-center px-32">
                    <div className="absolute bg-white p-4">
                        <h1 className="instructorMain font-bold text-4xl mb-6">Come Teach With Us</h1>
                        <p>Become an instructor and change lives — including your own</p>
                        <button>Get Started</button>
                    </div>
                </div>
                {/* <img src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" alt=""  className="h-full object-cover"/> */}
            </div>
            <div className="flex flex-col text-center items-center py-24 px-12">
                <h1 className="instructorMain text-5xl mb-16">So Many reasons to start</h1>
                <div className="grid grid-cols-3 gap-x-10 w-full">
                    <div className="flex flex-col items-center">
                        <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="" className="mb-6" />
                        <p className="text-xl font-bold mb-3">Teach your way</p>
                        <p className="text-sm font-normal">Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="" className="mb-6" />
                        <p className="text-xl font-bold mb-3">Teach your way</p>
                        <p className="text-sm font-normal">Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="" className="mb-6" />
                        <p className="text-xl font-bold mb-3">Teach your way</p>
                        <p className="text-sm font-normal">Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#566bad]  px-16 py-16 grid grid-cols-5 gap-x-7 text-center helvetica">
                <div>
                    <h1 className="font-bold text-4xl">57M</h1>
                    <p>Students</p>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">57M</h1>
                    <p>Students</p>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">57M</h1>
                    <p>Students</p>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">57M</h1>
                    <p>Students</p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl">57M</h1>
                    <p>Students</p>
                </div>
            </div>
            <div className="py-24 flex flex-col items-center px-24">
                <div className="mb-10">
                    <h1 className="font-bold tracking-wide text-4xl instructorMain">How to Begin</h1>
                </div>
                <div>
                    <div className="flex justify-center gap-x-10 helvetica text-2xl font-semibold">
                        <button onClick={() => handleBegin("plan")} className={ begin == "plan" ? 'border-b-2 border-white pt-5 pb-1 hover:border-black' : "border-b-2 border-white pt-5 pb-1 hover:border-black text-[#707579]"}>Plan your curriculum</button>
                        <button onClick={() => handleBegin("record")} className={ begin == "record" ? 'border-b-2 border-white pt-5 pb-1 hover:border-black' : "border-b-2 border-white pt-5 pb-1 hover:border-black text-[#707579]"}>Record your video</button>
                        <button onClick={() => handleBegin("launch")} className={ begin == "launch" ? 'border-b-2 border-white pt-5 pb-1 hover:border-black' : "border-b-2 border-white pt-5 pb-1 hover:border-black text-[#707579]"}>Launch your course</button>
                    </div>
                </div>
                <div className="py-4 w-full">
                    <div className={begin == "plan" ? "px-24 flex" : "hidden"}>
                        <div className="w-1/2 flex flex-col justify-center gap-y-3 tracking-wide text-lg text-[#38383a]">
                            <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>
                            <p>The way that you teach — what you bring to it — is up to you.</p>
                            <h3 className="font-bold text-black">How we help you</h3>
                            <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" alt="" />
                        </div>
                    </div>
                    <div className={begin == "record" ? "px-24 flex" : "hidden"}>
                        <div className="w-1/2 flex flex-col justify-center gap-y-3 tracking-wide text-lg text-[#38383a]">
                            <p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.</p>
                            <p>If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
                            <h3 className="font-bold text-black">How we help you</h3>
                            <p>Our support team is available to help you throughout the process and provide feedback on test videos.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg" alt="" />
                        </div>
                    </div>
                    <div className={begin == "launch" ? "px-24 flex" : "hidden"}>
                        <div className="w-1/2 flex flex-col justify-center gap-y-3 tracking-wide text-lg text-[#38383a]">
                            <p>Gather your first ratings and reviews by promoting your course through social media and your professional networks.</p>
                            <p>Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.</p>
                            <h3 className="font-bold text-black">How we help you</h3>
                            <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f7f9fa] px-60">
                <Swiper
                slidesPerView={1}
                navigation={true}
                autoplay={{delay: 3000}}
                modules={[Navigation]}
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "25px",
                  }}

                className="mySwiper "
                >
                    <SwiperSlide className="flex swiper-slide-testimoni">
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" alt="" />
                        </div>
                        <div className="w-1/2 text-sm p-5 flex flex-col gap-y-4 ">
                            <div className="text-left">
                                <p className="text-xl">“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
                            </div>
                            <div className="text-left">
                                <p className="font-bold">Frank Keane</p>
                                <p className="text-gray-500">Data Science & IT Certifications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex swiper-slide-testimoni">
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/instructors/en/paulo-1x.jpg" alt="" />
                        </div>
                        <div className="w-1/2 text-sm p-5 flex flex-col gap-y-4">
                            <div className="text-left">
                                <p className="text-xl">“Udemy has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college. It’s so humbling.”</p>
                            </div>
                            <div className="text-left">
                                <p className="font-bold">Paulo Dichone</p>
                                <p className="text-gray-500">Developer (Android Speciality)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex swiper-slide-testimoni">
                        <div className="w-1/2">
                            <img src="https://s.udemycdn.com/teaching/instructors/en/deborah-1x.jpg" alt="" />
                        </div>
                        <div className="w-1/2 text-sm p-5 flex flex-col gap-y-4">
                            <div className="text-left">
                                <p className="text-xl">“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”</p>
                            </div>
                            <div className="text-left">
                                <p className="font-bold">Deborah Grayson Riege</p>
                                <p className="text-gray-500">Leadership, Communication</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 

            <div className="h-screen">
                <div className="flex py-40">
                    <div>
                        <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="" className="-translate-x-[50%]" />
                    </div>
                    <div className="text-center flex flex-col justify-center w-3/4">
                        <h1 className="instructorMain text-[2.7rem] mb-5 text-[#1c1d1f] font-bold">You won’t have to do it alone</h1>
                        <p className="text-lg text-gray-800">Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center  gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community</p>
                    </div>  
                    <div>
                        <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="" className="translate-x-[45%]" />
                    </div>
                </div>
            </div>

            <div className="py-20 text-center flex flex-col gap-y-5 bg-[#f7f9fa]">
                <h1 className="text-5xl instructorMain font-semibold">Become an instructor today</h1>
                <div>
                    <p className="text-xl text-gray-800">Join one of the world’s largest online learning</p>
                    <p className="text-xl text-gray-800">marketplaces.</p>
                </div>
                <div>
                    <Link to="/register" className="bg-black border border-black inline-block text-white text-md px-24 py-3 hover:bg-white hover:text-black">Get Started</Link>
                </div>
            </div>
        </div>
    )
}





export default InstructorWelcome