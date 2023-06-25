import logo from "@/public/logo.png"
import Image from "next/image"
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi"
import { CiUser, CiHome, CiChat2, CiStar, CiLogout } from "react-icons/ci"
import { PiPaperPlaneRightThin } from "react-icons/pi"

const SideNav = () => {
    return (
        <div className="pt-4 pb-10 flex flex-col items-center  h-full border-r border-gray-200">
            <div className="relative rounded-full w-12 h-12 mb-10">
                <Image alt="logo" fill src={logo} />
            </div>
            <ul className="flex flex-col gap-8 justify-center items-center flex-1">
                <li>
                    <CiHome className="text-2xl text-blue-600  " />
                </li>
                <li>
                    <CiUser className="text-2xl" />
                </li>
                <li>
                    <CiChat2 className="text-2xl" />
                </li>
                <li>
                    <PiPaperPlaneRightThin className="text-2xl" />
                </li>
                <li>
                    <CiStar className="text-2xl" />
                </li>
                <li className="hover:bg-red-600 hover:text-white transition mt-auto bg-gray-200 p-2 rounded-md text-red-500 " >
                    <CiLogout className="text-2xl" />
                </li>
            </ul>

        </div>
    )
}

export default SideNav