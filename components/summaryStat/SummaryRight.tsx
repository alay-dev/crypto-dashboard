import { RiSettings2Line } from "react-icons/ri"
import { IoMdAdd, } from "react-icons/io"
import { VscTarget } from "react-icons/vsc"
import { BsCashCoin } from "react-icons/bs"
import { AiOutlineUpload } from "react-icons/ai"

const SummaryRight = () => {
    return (
        <div className="p-4 w-full">
            <div className="flex justify-end items-center gap-2" >
                <div className="bg-gray-200 rounded-md p-2 " >
                    <p>5 sep 2023 - 13 sep 2023</p>
                </div>
                <button className="bg-gray-200 rounded-md p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition" >
                    <RiSettings2Line className="text-2xl" />
                </button>
                <button className=" rounded-md p-2 text-white bg-blue-600 hover:bg-black transition" >
                    <IoMdAdd className="text-2xl " />
                </button>
            </div>
            <div className="mt-5" >
                <p className="text-gray-400" >13 sep 2023</p>
                <ul className="mt-2 mb-4 " >
                    <li className="flex justify-between items-center" >
                        <div className="flex items-start gap-2" >
                            <VscTarget className="text-2xl" />
                            <div>
                                <h5 className="font-semibold" >Target</h5>
                                <p className="text-gray-500 text-sm" >10 sep 2022 at 3:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-orange-600 text-3xl" >&bull;</p>
                            <p>Equipment</p>
                        </div>
                        <p className="font-semibold text-orange-600 ">- Rs 12,425.00</p>
                    </li>
                </ul>
                <p className="text-gray-400" >12 sep 2023</p>
                <ul className="mt-2 mb-2 flex flex-col  gap-6" >
                    <li className="flex justify-between items-center" >
                        <div className="flex items-start gap-2" >
                            <VscTarget className="text-2xl" />
                            <div>
                                <h5 className="font-semibold" >Pak Transfer</h5>
                                <p className="text-gray-500 text-sm" >10 sep 2022 at 3:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-blue-600 text-3xl" >&bull;</p>
                            <p>Marketing</p>
                        </div>
                        <p className="font-semibold text-orange-600">- Rs 12,425.00</p>
                    </li>
                    <li className="flex justify-between items-center" >
                        <div className="flex items-start gap-2" >
                            <BsCashCoin className="text-2xl" />
                            <div>
                                <h5 className="font-semibold" >Salary Transfer</h5>
                                <p className="text-gray-500 text-sm" >10 sep 2022 at 3:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-green-600 text-3xl" >&bull;</p>
                            <p>Supplies</p>
                        </div>
                        <p className="font-semibold text-blue-600">+ Rs 25,425.00</p>
                    </li>
                    <li className="flex justify-between items-center" >
                        <div className="flex items-start gap-2" >
                            <AiOutlineUpload className="text-2xl" />
                            <div>
                                <h5 className="font-semibold" >Cash withdrawl</h5>
                                <p className="text-gray-500 text-sm" >10 sep 2022 at 3:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-green-600 text-3xl" >&bull;</p>
                            <p>Banking</p>
                        </div>
                        <p className="font-semibold text-orange-600">- Rs 12,425.00</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SummaryRight