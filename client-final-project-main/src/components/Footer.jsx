import Logos from "../assets/logo.png"
const Footer = () => {
    return (
        <div className="bottom-0 bg-[#1c1d1f] relative text-white p-12 w-full">
            <div className="flex gap-x-16 text-sm font-light">
                <div className="flex flex-col gap-y-2 ">
                    <p>Udemy Business</p>
                    <p>Tech on Udemy</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Investors</p>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookie settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
            </div>
            <div className="pt-20 flex justify-between">
                <img src={Logos} alt="" className="w-32"/>
                <p>© 2023 Privator, Inc.</p>
            </div>
        </div>
    )
}

export default Footer