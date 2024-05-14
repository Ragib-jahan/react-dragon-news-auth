import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimmingPic from '../../../assets/qZone1.png'
import classPic from '../../../assets/qZone2.png'
import PlaygroundPic from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="mb-3 flex">Login with</h2>
                <button className="btn btn-outline w-full mb-1">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GitHub
                </button>

                {/* FIND US */}

                <div>
                    <h2 className="flex mt-5 mb-3">Find Us on</h2>
                    <a className="flex items-center gap-1 border rounded-t-lg p-5" href="">
                        <FaFacebook />
                        Facebook
                    </a>
                    <a className="flex items-center gap-1 border-x p-5" href="">
                        <FaTwitter />
                        Twitter
                    </a>
                    <a className="flex items-center gap-1 border rounded-b-lg p-5 " href="">
                        <FaInstagram />
                        Instagram
                    </a>
                </div>

{/* Q-Zone  */}

<div className="mt-8 py-2 px-4 rounded-lg bg-[#F3F3F3]">
    <div>
    <h2 className="flex mt-5">Q-Zone</h2>
    <img src={swimmingPic} alt="" />
    <img src={classPic} alt="" />
    <img src={PlaygroundPic} alt="" />
    </div>

</div>

            </div>
        </div>
    );
};

export default RightSideNav;